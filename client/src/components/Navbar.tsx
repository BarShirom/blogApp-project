import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext);


  return (
     <div className="navbar">
      <div className="container">
        <div className="header">
         <h1>BlogApp</h1>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=music">
            <h3>Music</h3>
          </Link>
          <Link className="link" to="/?cat=science">
            <h3>Science</h3>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h3>Technology</h3>
          </Link>
          <Link className="link" to="/?cat=travels">
            <h3>Travels</h3>
          </Link>
          <Link className="link" to="/?cat=philosophy">
            <h3>Philosophy</h3>
          </Link>
          <Link className="link" to="/?cat=pets">
            <h3>Pets</h3>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar