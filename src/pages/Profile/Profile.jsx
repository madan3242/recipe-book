import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import userImg from "../../images/user.png"

const Profile = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mx-auto mt-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <img className="rounded-pill" src={userImg} alt="" style={{ height: "90px"}} />
                            <div className="card-title  my-4" style={{ fontSize: "26px"}}>
                                User Name
                            </div>
                            <div className="card-text my-4">
                                user@test.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 my-3 mx-auto">
                    <h2>Saved recipes</h2>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile