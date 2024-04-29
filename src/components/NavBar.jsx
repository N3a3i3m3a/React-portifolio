import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom'
const NavBar = () => {
  

  return (
    <section className="flex flex-row justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Naima</h1>
      </div>
      <div className="flex flex-row gap-7">
      <div>
        <Link to='./Home'>Home</Link> 
      </div>
      <div>
        <Link to='./About'>About me</Link> 
      </div>
      <div>
        <Link to='./SkillsList'>Skills</Link> 
      </div>
      <div>
        <Link to='./Experience'>Experience</Link> 
      </div>
      <div>
        <Link to='./Contact'>Contact me</Link> 
      </div>
      </div>
    </section>
      
  );
};

export default NavBar;