import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import RecipeCard from "../../components/Recipes/RecipeCard";
import userImg from "../../images/user.png";

const Profile = () => {
  let userInfo = useSelector((state) => {
    return state.userData;
  });

  let { user } = userInfo;

  let [saved, setSaved] = useState([]);
  useEffect(() => {
    let url = `http://127.0.0.1:4000/user/${user._id}/saved`
    axios.get(url)
         .then((res) => {
          setSaved(res.data)
         })
  })

  return (
    <>
      <Navbar user={user} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto mt-3">
            <div className="card">
              <div className="card-body text-center">
                <img
                  className="rounded-pill"
                  src={userImg}
                  alt=""
                  style={{ height: "90px" }}
                />
                <div className="card-title  my-4" style={{ fontSize: "26px" }}>
                  {user.firstName +" "+ user.lastName}
                </div>
                <div className="card-text my-4">{user.email}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 my-3 mx-auto">
            <h2>Saved recipes</h2>
          </div>
        </div>
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <div className="row mx-auto">
                  {
                    saved.length > 0 ? (
                      saved.map((s) => (
                        <>
                          <RecipeCard key={s._id} id={s._id} name={s.name} image={s.image} />
                        </>
                      ))
                    ) : (<></>)
                  }
                    
                </div>

            </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
