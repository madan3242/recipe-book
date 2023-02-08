import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Carousel from '../../components/Carousel/Carousel'
import Navbar from '../../components/Navbar/Navbar'
import RecipeCard from '../../components/Recipes/RecipeCard'
import Search from '../../components/Search/Search'

const Home = () => {
  let userInfo = useSelector((state) => {
    return state.userData;
  });

  let {user} = userInfo

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
      <Navbar user={user} />
      <Carousel />
      <Search />
      <div className="container">
        <div className="row mb-3">
          <h2>Featured Recipes</h2>
        </div>
        <div className="row mb-3">
        {
            recipes.length > 0 ? <>
                <RecipeCard id={recipes[0]._id} name={recipes[0].name} image={recipes[0].image}  />
                <RecipeCard id={recipes[1]._id} name={recipes[1].name} image={recipes[1].image}  />
                <RecipeCard id={recipes[2]._id} name={recipes[2].name} image={recipes[2].image}  />
                <RecipeCard id={recipes[3]._id} name={recipes[3].name} image={recipes[3].image}  />
            </> : <></>
        }
        </div>
        <div className="row mb-3">
          <div class="d-grid gap-2 col-4 mx-auto">
            <Link to="/recipes" class="btn btn-outline-success" type="button">Show More</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home