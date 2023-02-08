import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <div className="row">
            <div className="col-md-10">
              <h5 className="card-title">{name}</h5>
            </div>
            <div className="col ml-auto">
                <span className="ml-auto"><FontAwesomeIcon icon={faHeart} /></span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
