require("dotenv").config();
const express = require("express");
// const morgan = require("morgan");
const cors = require("cors");
const db = require("./db");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// GET ALL Restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query(`
        select * from restaurants`);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// GET one restaurant and REVIEWS
app.get("/api/v1/restaurants/:id", async (req, res) => {
  console.log(req.params);
  try {
    const restaurant = await db.query(
      `
    SELECT * FROM restaurants WHERE id=$1
    `,
      [req.params.id]
    );
    const reviews = await db.query(
      `
    SELECT * FROM reviews WHERE restaurant_id=$1
    `,
      [req.params.id]
    );
    // console.log(results.rows[0]);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// POST a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  console.log(req.body);
  try {
    const results = await db.query(
      `
    INSERT INTO restaurants (name, location, price_range)
    VALUES($1, $2, $3)
    RETURNING *;
    `,
      [req.body.name, req.body.location, req.body.price_range]
    );
    // console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log("error", error);
  }
});

// UPDATE
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(
      `
    UPDATE restaurants SET name=$1, location=$2, price_range=$3
    WHERE id=$4  RETURNING *;`,
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    console.log(results.rows[0]);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log("error", error);
  }
});

// DELETE
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const resilts = await db.query(
      `
    DELETE FROM restaurants WHERE id=$1;
    `,
      [req.params.id]
    );
    res.status(204).json({
      status: "success deleting",
    });
  } catch (error) {
    console.log("error", error);
  }
});

// POST review

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server is running on this port ${port}`);
});
