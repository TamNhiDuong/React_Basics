import React from 'react';
import { Link } from "react-router-dom"; 
import"bootstrap/dist/css/bootstrap.min.css";
const Navigator = props => {
    return (
        //Boosstrap
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <Link className="navbar-brand" to ="/" >My React Page</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id ="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about/">About</Link>
              </li>

              <li className="nav -item">
                <Link className="nav-link" to="/contact/">Contact</Link>
              </li>
        </ul>
        </div>
        </nav>
        
    );
};
export default Navigator; 

