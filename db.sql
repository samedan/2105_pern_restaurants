CREATE TABLE restaurants (
  id          INT,
  name        VARCHAR(50),
  location    VARCHAR(50),
  price_range INT
);


INSERT INTO restaurants (id, name, location, price_range)
values(123, 'kfc', 'new york', 4);

CREATE TABLE restaurants (
  id          BIGSERIAL NOT NULL,
  name        VARCHAR(50) NOT NULL,
  location    VARCHAR(50) NOT NULL,
  price_range INT NOT NULL
);

CREATE TABLE restaurants (
  id          BIGSERIAL NOT NULL PRIMARY KEY,
  name        VARCHAR(50) NOT NULL,
  location    VARCHAR(50) NOT NULL,
  price_range INT NOT NULL check(price_range >= 1 and price_range <=5)
);

INSERT INTO restaurants (name, location, price_range)
values( 'mcdonalds', 'paris', 2);

CREATE TABLE reviews (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
  name VARCHAR(50) NOT NULL,
  review TEXT NOT NULL,
  rating INT NOT NULL check(rating >= 1 and rating <= 5 )
);


// COUNT NR of restaurants in location
SELECT location, COUNT(location) FROM restaurants GROUP BY location;

// COUNT NR of Ratings for each restaurants
SELECT restaurant_id, COUNT(restaurant_id) FROM reviews GROUP BY restaurant_id;

// JOIN Restaurants & reviews tables
SELECT * FROM restaurants INNER JOIN reviews ON restaurants.id=reviews.restaurant_id;

// 
SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating),1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id=reviews.restaurant_id;
