import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css';

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  
  function handleClick(getCurrentIndex) {
    console.log("handleClick",getCurrentIndex)

    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    console.log("getCurrentIndex",getCurrentIndex)
    setHover(getCurrentIndex)
  }

  function handleMouseLeave() {
    console.log("handleMouseLeave",rating)
    setHover(0)
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "S"}

            onClick={() => handleClick(index)}
            onMouseOver={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}

            size={40}
          />
        );
      })}
    </div>
  );
}