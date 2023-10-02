const fs = require("fs");
const CREATE_STMT = `CREATE TABLE IF NOT EXISTS estates (
    id serial PRIMARY KEY,
    title varchar(255),
    image_url varchar(255)
);`;
async function getData() {
  const response = await fetch(
    "https://www.sreality.cz/api/en/v2/estates?category_main_cb=1&category_type_cb=1&page=1&per_page=500&tms=1696172941275"
  );

  const data = await response.json();
  const estates = data._embedded.estates;
  const insertStatements = estates.map((estate) => {
    const estateName = estate.name;
    const estateImage = estate._links.images[0].href;
    return `INSERT INTO estates (title, image_url) VALUES ('${estateName}', '${estateImage}');`;
  });

  try {
    fs.writeFileSync(
      "./inserts.sql",
      CREATE_STMT + "\n" + insertStatements.join("\n")
    );
  } catch (e) {
    console.log(e);
  }
}

getData();
