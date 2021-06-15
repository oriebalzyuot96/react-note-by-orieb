import React, { Component , useContext } from 'react'        //just write impr
import { ThemeContext } from '../contexts/ThemeContext';


 //just write sfc to create class component 



const  ThemeToggle= () => { 

    const {toggleTheme}= useContext(ThemeContext);
    
    /*********** we need to toggle the value  isLightTheme in context provider from true to false and other wise  ************* */
    /********* so back to provider to create function that can toggle the value of isLightTheme ************* */
    /*********** contextType without s >> important  ************* */
    return ( 

        <button onClick={toggleTheme}> Toggle The Theme</button>

     );
}
 

export default  ThemeToggle;



/********* need to render this component so go to app ************ */