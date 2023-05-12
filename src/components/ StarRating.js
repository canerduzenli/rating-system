import React from 'react'
import { useState } from 'react';
import Star from './Star';



const StarRating = () => {
  const [stars, setStars] = useState();
  const handleStarClick = (starIndex) => {
    setStars(starIndex + 1);
  };

  const starComponents = [...Array(5)].map((_, index) => (
    <Star
      key={index}
      selected={index < stars}
      onClick={() => handleStarClick(index)}
    />
  ));
  let word = "";
  if (stars === 1) {
    word = "Very Bad";
  } else if (stars === 2) {
    word = "Bad";
  } else if (stars === 3) {
    word = "Average";
  } else if (stars === 4) {
    word = "Good";
  } else if (stars === 5) {
    word = "Very Good";
  }

  return (
    <div className='container'>
      <div className='StarsC'>
        <h2>{word}</h2>
        <div className='starsRa'>{starComponents}</div>
      </div>
    </div>
  );
};

export default StarRating;