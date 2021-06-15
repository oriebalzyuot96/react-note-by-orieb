

/***** prefer to use 
 * use this keyword if you use class component 
 * 
 * 
 * use consumer if use functional component >> 
 * advantage of use consumer that you can access 
 * multiple context in one component 
 * 
 * 
 ********/

 /********************** way 1 to accesses the context api by use keyword this but it is not the best practice tutorial  3 + 4 ****************/



// import React, { Component } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';

// class BookList extends Component {

//   static contextType = ThemeContext 

//   //themecontext >> the context i crated not the provider .
//   render() { 
//       //this >> refer to this component  .
//     console.log(this.context); //it will provided the data i  shared between component 


//     //now i need to separate this to 3 items :

//     const {isLightTheme,light,dark}=this.context;
//     const theme = isLightTheme ?light : dark;


  
//     return ( 
//       <div className="book-list"  style={{background:theme.bg ,color:theme.syntax}}>
//         <ul>
//           <li style={{background:theme.ui }}>the way of kings</li>
//           <li  style={{background:theme.ui }}>the name of the wind</li>
//           <li  style={{background:theme.ui }}>the final empire</li>
//         </ul>
//       </div>
//     );
//   }
// }
 
// export default BookList;



// /******************** way 2 to accesses the context api by use consumer tutorial 5 ************************* **/


import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {


  render() { 
     
        // /**ThemeContext.Consumer expects us to in function  ,, this function return some jsx  */

    return ( 

/****************    important note don't make space after     <ThemeContext.Consumer>         ***************** */
      <ThemeContext.Consumer>{(context)=>{
        
        const {isLightTheme,light,dark}=context;
        const theme = isLightTheme ?light : dark;
        return(
            <div className="book-list"  style={{background:theme.bg ,color:theme.syntax}}>
              <ul>
                <li style={{background:theme.ui }}>the way of kings</li>
                <li  style={{background:theme.ui }}>the name of the wind</li>
                <li  style={{background:theme.ui }}>the final empire</li>
              </ul>
            </div>
        )


      }}

     </ThemeContext.Consumer>


    );
  }
}
 
export default BookList;




