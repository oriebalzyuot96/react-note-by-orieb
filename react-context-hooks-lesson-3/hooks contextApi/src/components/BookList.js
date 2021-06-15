
import React, { Component ,useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

import { BookContext } from '../contexts/BookContext';


/*** you can use consumer but its not the clean or best practice you should use use context */
const BookList = () => { 
  
  const {isLightTheme,light,dark} = useContext(ThemeContext)
  const {books} = useContext(BookContext)

  const theme= isLightTheme?light:dark

  return ( 

    <div className="book-list"  style={{background:theme.bg ,color:theme.syntax}}>
    <ul>
    {books.map (book=>{
      return (
        <li key={book.id} style={{background:theme.ui }}>{book.title}</li>

      )

    })}
    
    </ul>
  </div>


   );
}
 

 
export default BookList;




