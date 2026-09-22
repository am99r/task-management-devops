const pool = require("./db/pool");

pool.query("SELECT NOW()", (error, result) => {
  if (error) {
    console.error("Database connection failed:", error);
  } else {
    console.log("Database connected!");
    console.log(result.rows);
  }

  pool.end();
});