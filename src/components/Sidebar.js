import React, { Component } from 'react';
import styles from '../styles/main.css'

class Sidebar extends Component {
  render() {
    return (
      <div className={styles['aside']}>
        <h4 className={styles['pl-10']}>&#10000; All Threads</h4>
        <div className={styles['pl-10']}>Channels <span className={styles['icon-plus']}>&#10010;</span></div>
        <ul>
          <li>&#9839; General</li>
          <li>&#9839; Product</li>
          <li>&#9839; Random</li>
          <li>&#9839; UX</li>
        </ul>
        <div className={styles['pl-10']}>Direct Messages <span className={styles['icon-plus']}>&#10010;</span></div>
        <ul>
          <li><span className={styles['loged']}>&#10061;</span> Aaron</li>
          <li><span className={styles['nloged']}>&#10061;</span> Adele</li>
          <li><span className={styles['loged']}>&#10061;</span> Cheryl</li>
          <li><span className={styles['loged']}>&#10061;</span> Jacob</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;