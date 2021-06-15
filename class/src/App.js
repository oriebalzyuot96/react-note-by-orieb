import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvider from './contexts/ThemeContext';
// import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">

      {/* themecontextprovider is the context api store >> provider  */}
      <ThemeContextProvider>

              {/* navbar and booklists is >> component   */}
        {/* <AuthContextProvider>  */}
          <Navbar />
          <BookList />
          <ThemeToggle />
        {/* </AuthContextProvider>    */}
      </ThemeContextProvider>
    </div>
  );
}

export default App;




// tutorial 3 end how to access this data in app.js 
//in component nav bar i need to access this data ,,the way is use is used in class component .