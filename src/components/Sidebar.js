import React, { Component } from 'react';
import styles from '../styles/main.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className={styles['aside']}>
        <h4 className={styles['pl-10']}>&#10000; All Threads</h4>
        <div className={styles['pl-10']}>Channels <span className={styles['icon-plus']}>&#10010;</span></div>
        <ul>
          <li>
            <Link to="/Channel">&#9839; General</Link>
          </li>
          <li>
            <Link to="/Channel">&#9839; Product</Link>
          </li>
          <li>
            <Link to="/Channel">&#9839; Random</Link>
          </li>
          <li>
            <Link to="/Channel">&#9839; UI/UX</Link>
          </li>
          
        </ul>
        <div className={styles['pl-10']}>All Lists <span className={styles['icon-plus']}>&#10010;</span></div>
        <ul>
          <li>
            <Link to="/"># My List</Link>
          </li>
        </ul>
        <div className={styles['pl-10']}>Direct Messages <span className={styles['icon-plus']}>&#10010;</span></div>
        <ul>
          <li><span className={styles['loged']}>&#10061;</span> Aaron</li>
          <li><span className={styles['nloged']}>&#10061;</span> Adele</li>
          <li><span className={styles['loged']}>&#10061;</span> Cheryl</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;