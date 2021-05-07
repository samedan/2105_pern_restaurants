const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "Fuckyahoo667",
  database: "yelp",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
