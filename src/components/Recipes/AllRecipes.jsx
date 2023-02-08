import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import RecipeCard from './RecipeCard';

const AllRecipes = () => {
  let [recipes, setRecipes] = useState([])
  useEffect(() => {
    let url =  `http://127.0.0.1:4000/recipe/`
    axios.get(url)
         .then((res) => {
          setRecipes(res.data)
         })
  },[recipes])
  
  return (
    <>
    <Navbar />
    <Search />
    <div className="container">
        <div className="row">
          {
            recipes.length > 0 ? <>
              {
                recipes.map((recipe) => (
                  <RecipeCard key={recipe._id} id={recipe._id} name={recipe.name} image={recipe.image}  />
                ))
              }
            </> : <></>
          }
        </div>
    </div>
    </>
  )
}

export default AllRecipes