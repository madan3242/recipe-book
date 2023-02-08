import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Carousel from '../../components/Carousel/Carousel'
import Navbar from '../../components/Navbar/Navbar'
import RecipeCard from '../../components/Recipes/RecipeCard'
import Search from '../../components/Search/Search'
import { getUserInfo } from '../../redux/users/user.action'

const Home = () => {
  let userInfo = useSelector((state) => {
    return state.userData;
  });

  let {user} = userInfo

  let dispatch =  useDispatch();
  
  useEffect(() => {
    dispatch(getUserInfo());
  })

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
    {JSON.stringify(user)}
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
              {
                recipes.map((recipe, index) => (
                  <RecipeCard key={index + 1} id={recipe._id} name={recipe.name} image={recipe.image}  />
                ))
              }
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