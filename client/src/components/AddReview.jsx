import React, { useState } from "react";

const AddReview = () => {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("Rating");

  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="name">Rating</label>
            <select
              id="rating"
              className="custom-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled> Rating</option>
              <option value={1}> 1</option>
              <option value={2}> 2</option>
              <option value={3}> 3</option>
              <option value={4}> 4</option>
              <option value={5}> 5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">Review</label>
          <textarea
            value={reviewText}
            placeholder="Write your review"
            onChange={(e) => setReviewText(e.target.value)}
            id="review"
            className="form-control"
          ></textarea>
        </div>
        <button className="btn btn-primary">Submit Review</button>
      </form>
    </div>
  );
};

export default AddReview;
