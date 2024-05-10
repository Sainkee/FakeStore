import React from "react";
import { Star, StarHalf, StarOff } from "lucide-react";

const useRating = (stars) => {
  const renderStars = () => {
    let rating = []; 
    const fullStar = Math.floor(stars);
    const halfStar = stars % 1 !== 0;
    

    for (let i = 0; i <5; i++) {
      if (i < fullStar) {
        rating.push(<Star key={i} color="yellow" size={20} />);
      } else if (i === fullStar && halfStar) {
        rating.push(<StarHalf key={i} color="yellow" size={20} />);
      } else {
        rating.push(<StarOff key={i} color="yellow" size={20} />);
      }
    }

    return rating;
  };
  return renderStars();
};

const StarRating = ({ rating }) => {
  const stars = useRating(rating);

  return (
    <div className="my-2">
     
      <span className="flex">Current Rating:{stars}</span>
    </div>
  );
};

export default StarRating;
