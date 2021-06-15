import React, { Component } from 'react'        //just write impr
import { ThemeContext } from '../contexts/ThemeContext';


 //just write cc to create class component 

class ThemeToggle  extends Component {
 /*********** we need to toggle the value  isLightTheme in context provider from true to false and other wise  ************* */
 /********* so back to provider to create function that can toggle the value of isLightTheme ************* */
/*********** contextType without s >> important  ************* */


 static contextType = ThemeContext;
    render() { 
        const {toggleTheme}= this.context;

        return ( 

            <button onClick={toggleTheme}> Toggle The Theme</button>

         );
    }
}
 
export default  ThemeToggle;



/********* need to render this component so go to app ************ */