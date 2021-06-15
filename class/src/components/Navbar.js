
 /********************** way 1 to accesses the context api by use keyword this but it is not the best practice tutorial  3 + 4 ****************/



// import React, { Component } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';

// class Navbar extends Component {

//   static contextType = ThemeContext 
//   //themecontext >> the context i crated not the provider .
//   render() { 
//       //this >> refer to this component  .
//     console.log(this.context); //it will provided the data i  shared between component 


//     //now i need to separate this to 3 items :

//     const {isLightTheme,light,dark}=this.context;
//     const theme = isLightTheme ?light : dark;

//     return ( 
//       <nav style={{background:theme.ui ,color:theme.syntax}}>
//         <h1>Context App</h1>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     );
//   }
// }
 
// export default Navbar;



// /******************** way 2 to accesses the context api by use consumer tutorial 5 ************************* **/


import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {

  render() { 
      
  

    return ( 
      
      /**ThemeContext.Consumer expects us to in function  ,, this function return some jsx  */


      <ThemeContext.Consumer>{(context)=>{

    const {isLightTheme,light,dark}=context;
    const theme = isLightTheme ?light : dark;
        return (

      <nav style={{background:theme.ui ,color:theme.syntax}}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav> 


        )


      }}
     
      </ThemeContext.Consumer>
    );
  }
}
 
export default Navbar;



/*********** next step how can i change the value of theme so what you need ? is to create theme component >> go to this file ************ */