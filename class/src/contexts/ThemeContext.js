import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
  }

  toggleTheme=() => {
    this.setState({isLightTheme:!this.state.isLightTheme });
  }

  render() { 
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}> 
      {/* //the value of context is is my data i need to share in this case i need to share data about theme .  */}

        {this.props.children}     
          {/* //important line to read data or context i provided in app.js .  */}

      </ThemeContext.Provider>
    );
  }
}
//  don't forget to export ThemeContextProvider
export default ThemeContextProvider;
