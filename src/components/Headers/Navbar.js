import React from "react";
import "./Header.css";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
    
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
          <a class="nav-link" href="#">Red</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Blue</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Green</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Yellow</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pink</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Purple</a>
        </li>
      </ul>
      
    </div>
  </nav>
    

  );
};
