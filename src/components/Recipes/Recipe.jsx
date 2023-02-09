import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import axios from "axios";
import { useSelector } from "react-redux";

const Recipe = () => {
  let [recipeId] = useState(useParams().id);
  let [recipe, setRecipe] = useState({
    name: "",
    image: "",
    ingredients: [],
    instructions: []
  });

  let userInfo = useSelector((state) => {
    return state.userData;
  });

  let { user } = userInfo;

  useEffect(() => {
    let url =  `http://127.0.0.1:4000/recipe/${recipeId}`
    axios.get(url)
        .then((res) => {
          setRecipe(res.data)          
        })
    })
  
  return (
    <>
      <Navbar user={user} />
      <div className="container">
        <div className="row my-3">
            <Link to="/recipes">Go back</Link>
        </div>
        <div className="row mb-3">
          <div className="col-lg-11">
            <h1>{recipe.name}</h1>
          </div>
          <div className="col-lg-1">
                <FontAwesomeIcon icon={faHeart} style={{height: "20px"}}/>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6">
            <img src={recipe.image} alt="" />
          </div>
          <div className="col-lg-5">
            <h2>Ingredients</h2>
            <ul>
              {
                recipe.ingredients.length > 0 ? <>
                {
                  recipe.ingredients.map((ingredient, index) => (
                    <li key={index + 1}>{ingredient}</li>
                  ))
                }
                </> : <></>
              }
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2>Instructions</h2>
            {
              recipe.instructions.length > 0 ? <>
              {
                recipe.instructions.map((instruction, index) => (
                  <p key={index}><span className="fw-bold">Step {index + 1} : </span>{instruction}</p>
                ))
              }
              </> : <></>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
