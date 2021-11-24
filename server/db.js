const Pool = require("pg").Pool;

const pool = new Pool({
  user: "ayomi",
  password: "blazestorm",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
