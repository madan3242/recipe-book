import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({id, name, image, userId}) => {
  let saveRecipe = () => {
    let url = `http://127.0.0.1:4000/user/${userId}/${id}`
    axios.patch(url)
  }

  return (
    <div className="col-lg-3">
      <div className="card mb-3">
      <Link to={`/recipe/${id}`}>
        <img src={image} className="card-img-top" alt="recipe-image" />
      </Link>
        <div className="card-body">
          <div className="row">
            <div className="col-md-10">
              <h5 className="card-title">{name}</h5>
            </div>
            <div className="col ml-auto">
                <span className="ml-auto"><FontAwesomeIcon icon={faHeart} onClick={saveRecipe} /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
