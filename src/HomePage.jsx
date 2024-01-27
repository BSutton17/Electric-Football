import React from 'react'
import './HomePage.css'
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function HomePage (){
  return (
    <div id="wall">
        <div id="Title"><h1 id="Titles">Welcome to Electric Football</h1></div>
        
        <div id="start">
        <Link to= "/GameC" className="Link2">
        <button id="start_button" > Start Game</button>
        </Link>
        
        </div>
    </div>
  )
}

export default HomePage