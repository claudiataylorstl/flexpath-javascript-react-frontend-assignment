import React from "react";
import {Link, useLocation} from 'react-router-dom';


function Navbar() {
   const location = useLocation();
   
   
    return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        
        <Link class="navbar-brand ms-4 nav-link active" to="/">User Behavior Data</Link>
        
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/search">Search Through Dataset</Link>
        </li>
      </ul>
      </nav>
      
    </div>
  );
}

export default Navbar;