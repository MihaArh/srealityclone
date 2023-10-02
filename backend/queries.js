const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: "database",
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

const getEstates = (request, response) => {
  pool.query("SELECT * FROM estates", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getEstates,
};
