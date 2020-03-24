import React, { Component } from 'react';
import './App.css';
import Main from './components/main'
import Awards from './components/awards'
import News from './components/news'
import Teaching from './components/teaching'
import Publications from './components/publications'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
        <div id="layoutDefault">
            <Main></Main>
            {/*<Contact></Contact>*/}
            <News></News>
            <Awards></Awards>
            <Teaching></Teaching>
            <Publications></Publications>
            <Footer></Footer>
        </div>
    );
  }
}

export default App;