import React from "react";
import { Link } from "react-router-dom";
// import image from "../../images/chicken-biryani.jpg";

const RecipeCard = ({id, name, image}) => {

  return (
    <div className="col-lg-3">
      {JSON.stringify()}
      <div className="card mb-3">
      <Link to={`/recipe/${id}`}>
        <img src={image} className="card-img-top" alt="recipe image" />
      </Link>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
