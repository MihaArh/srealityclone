const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: "database",
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

const getEstates = (request, response) => {
  const { page = 1, pageSize = 10 } = request.query;
  const offset = (page - 1) * pageSize;

  const countQuery = "SELECT COUNT(*) FROM estates";

  pool.query(countQuery, (countError, countResult) => {
    if (countError) {
      console.error("Error counting records:", countError);
      return response.status(500).json({ error: "Internal Server Error" });
    }

    const totalRecords = parseInt(countResult.rows[0].count, 10);
    const totalPages = Math.ceil(totalRecords / pageSize);

    const dataQuery = {
      text: "SELECT * FROM estates LIMIT $1 OFFSET $2",
      values: [pageSize, offset],
    };

    pool.query(dataQuery, (dataError, dataResult) => {
      if (dataError) {
        console.error("Error executing the query:", dataError);
        return response.status(500).json({ error: "Internal Server Error" });
      }

      response.status(200).json({
        totalPages,
        currentPage: parseInt(page),
        estates: dataResult.rows,
      });
    });
  });
};

module.exports = {
  getEstates,
};
