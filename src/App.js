import React, { Component } from 'react';
import Login from './Components/login';
import Source from './Components/source';
import Convert from './Components/convert';
import Header from './Components/header';
import Footer from './Components/footer'





class App extends Component {
  




  render(){
  return (
    <div className="App">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap" rel="stylesheet" />

      <script src="https://js-cdn.music.apple.com/musickit/v1/musickit.js"></script>
      <Header />
      <Login />
      <div class="container-convert">
      <Source />
      <Convert />
      <Footer />
      </div>
      
    </div>
  );
  }
}


export default App;
