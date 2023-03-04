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
/*
import React from 'react';
import Image from './Image';

function App() {     <============
  
  const URL = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
  return (
    <main>
      <Image source={ URL } alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;
*/
