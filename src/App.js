import React, { Component } from 'react';
import './App.css';
import Main from './components/main'
import Awards from './components/awards'
import Contact from './components/contact'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
        <div id="layoutDefault">
            <Main></Main>
            <Awards></Awards>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
  }
}

export default App;