import { useState } from "react";
import "./Card.css";

function Card({
  id,
  name,
  info,
  image,
  price,
  removeTour,
}) {
  const [readMore, setReadMore] = useState(false);

  const description = readMore
    ? info
    : `${info.substring(0,50)}...`;

  function readMoreHandler() {
    setReadMore(!readMore);
  }

  return (
    <div className="card">
      <img
        src={image}
        alt={name}
        className="tour-image"
      />

      <div className="tour-details">
        <h4 className="tour-price">₹ {price}</h4>
        <h4 className="tour-name">{name}</h4>
      </div>

      <p className="tour-info">
        {description}
        <span
          className="read-more"
          onClick={readMoreHandler}
        >
          {readMore ? " Show Less" : " Read More"}
        </span>
      </p>

      <button
        className="not-interested-btn"
        onClick={() => removeTour(id)}
      >
        Not Interested
      </button>
    </div>
  );
}

export default Card;