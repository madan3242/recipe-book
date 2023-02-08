import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllRecipes from './components/Recipes/AllRecipes';
import Recipe from './components/Recipes/Recipe';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/recipes" element={<AllRecipes />} />
          <Route path="/recipe/:id" element={<Recipe />} />

          <Route path="/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
