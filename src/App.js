import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import List from './components/List'
import Channel from './components/Channel'
import ListDesactive from './components/ListDesactive'
import styles from './styles/main.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <main className={styles['main']} >
            <Sidebar />
            <div className={styles['main-content']}>
              <Route exact path="/" component={List} />
              <Route exact path="/ListDesactive" component={ListDesactive} />
              <Route exact path="/Channel" component={Channel} />
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;