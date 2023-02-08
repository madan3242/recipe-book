import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import RecipeCard from './RecipeCard';

const AllRecipes = () => {
  let [recipes, setRecipes] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    let url =  `http://127.0.0.1:4000/recipe/`
    axios.get(url)
         .then((res) => {
          setRecipes(res.data)
         })
  },[recipes])


  const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
          const filteredData = recipes.filter((item) => {
              return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
          })
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(recipes)
      }
  }
  
  return (
    <>
    <Navbar />
    <Search searchItems={searchItems} />
    <div className="container">
        <div className="row">
          {
            searchInput.length > 1 ? <>
              {
                filteredResults.map((recipe) => (
                  <RecipeCard key={recipe._id} id={recipe._id} name={recipe.name} image={recipe.image}  />
                ))
              }
            </> : <>
            {
                recipes.map((recipe) => (
                  <RecipeCard key={recipe._id} id={recipe._id} name={recipe.name} image={recipe.image}  />
                ))
              }
            </>
          }
        </div>
    </div>
    </>
  )
}

export default AllRecipes