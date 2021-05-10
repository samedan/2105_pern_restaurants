import React from "react";

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    // console.log(Math.ceil(rating));
    // console.log(rating);
    if (i <= rating) {
      // numbers of FULL stars
      stars.push(<i className="fas fa-star text-warning" key={i}></i>);
    } else if (
      // if decimal raises to highest number 0.23 -> 1
      i === Math.ceil(rating) &&
      // is a decimal
      !Number.isInteger(rating)
    ) {
      stars.push(<i className="fas fa-star-half-alt text-warning" key={i}></i>);
    } else {
      // EMPTY star
      stars.push(<i className="far fa-star text-warning" key={i}></i>);
    }
  }
  return <>{stars}</>;
}

export default StarRating;
