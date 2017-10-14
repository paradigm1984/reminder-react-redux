// packages
import React, { Component } from "react";

// imports
import Header from "./header";
import Footer from "./footer";



class App extends Component {
  render() {
    return(
      <div className= "App">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App;
