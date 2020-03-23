import React, { Component } from 'react';
import './App.css';
import Main from './components/main'
import Awards from './components/awards'
import News from './components/news'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
        <div id="layoutDefault">
            <Main></Main>
            <Awards></Awards>
            {/*<Contact></Contact>*/}
            <News></News>
            <Footer></Footer>
        </div>
    );
  }
}

export default App;