import React from 'react';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Image from './Image';
import staringCat from './staringCat.jpg';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
        <Image source= { staringCat } alternativeText= { "Cute cat staring" } />
      </div>
    );
  }
}

export default App;
