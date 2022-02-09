import React, { useState } from "react";

function Tour({ id, image, name, info, price, removeTour }) {
  const [readMore, setReadmMore] = useState(false);
  return (
    <article>
      <img src={image} alt={name} />
      <footer>
        <div>
          <h4>{name}</h4>
          <h4>{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}`}
          <button
            style={{ color: "blue" }}
            onClick={() => {
              setReadmMore(!readMore);
            }}
          >
            {readMore ? "Show Less" : "Show More...."}
          </button>
        </p>
        <button className="btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
}

export default Tour;
