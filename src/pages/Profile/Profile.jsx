import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./profile.css"

const Profile = () => {
  return (
    <>
        <Navbar />
        {/* {JSON.stringify(userInfo)} */}
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mx-auto mt-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="avatar">
                                <img src="" alt="" />
                            </div>
                            <div className="card-title">

                            </div>
                            <div className="card text"></div>
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