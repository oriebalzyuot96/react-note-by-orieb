import React, { Component , createContext, useContext , useState } from 'react';

export const BookContext = createContext();

const BooksContextProvider = (props) => {
    const [books,setBooks]= useState([
        {title:'part A ', id:1},
        {title:'part b ', id:2},
        {title:'part c ', id:3},
        {title:'part d ', id:4}

    ])
    return ( 

        <BookContext.Provider value={{books}}>

        {/* wrapping the children inside the provider  */}


          {props.children}

        </BookContext.Provider>



     );
}
 
export default BooksContextProvider;