import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        className="card-img-top"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h2
        className="card-
            title"
      >
        {props.monster.name}
      </h2>
      <p className="card-text">{props.monster.email}</p>
    </div>
  );
};
