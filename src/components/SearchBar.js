import React from 'react'
import styles from '../styles/main.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const SearchBar = (props) => {
  return(
    <div className={styles['main-content']}>
	        	<div>
			        <div className={styles['title-page']}>
			          <h2>User Management</h2>
			        </div>
			        <div className={styles['tool-bar']}>
			          <Link to="/"  className={`${styles.tabs} ${styles.none}`} id="first">
	       					Active Accounts
	     					</Link>
	     					<Link to="/ListDesactive" className={styles['tabs']}>
	       					Desactive Accounts
	     					</Link>
			          <div className={styles['search-box']}><input id="myInput" type="text" className={styles['search-item']} placeholder="Search for users" onChange={props.searchFunc} /><div className={styles['search-icon']}>&#128269;</div></div>
			        </div>
	        	</div>
	          
        	</div>
  )
}

export default SearchBar






					