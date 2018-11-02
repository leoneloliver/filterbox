import React, {Component} from 'react'
import SearchBar from './SearchBar'
import styles from '../styles/main.css'
import axios from 'axios'


class List2 extends Component {

  constructor(props){
    super(props)
    this.state = {
      users: [],
      store: []
    }
  }

  

  // componentDidMount(){
  //   axios.get('https://api.myjson.com/bins/hraj4')
  //   .then(json => json.data.map(result => (
  //     {
  //       name: `${result.name}`,       
  //       avatar: `${result.photo}`,
  //       email: `${result.email}`, 
  //     })))
  //   .then(newData => this.setState({users: newData, store: newData}))
  //   .catch(error => alert(error))
  // }

  componentDidMount(){
    axios.get('https://randomuser.me/api/?results=5')
    .then(json => json.data.results.map(result => (
      {
        name: `${result.name.first} ${result.name.last}`,       
        avatar: `${result.picture.large}`,
        email: `${result.email}`, 
        state: `${result.location.state}`,
        phone: `${result.phone}`
      })))
    .then(newData => this.setState({users: newData, store: newData}))
    .catch(error => alert(error))
  }

  filterNames(e){
    this.setState({users: this.state.store.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()))})
  }

  render() {
    const {users} = this.state
    return (
      <div>
        <SearchBar searchFunc={(e) => this.filterNames(e)}/>
        <div className={`${styles.items} ${styles.container}`}>
        <div className={styles['row']}>
          <table id="myUL">
          
            <tr className={styles['list-topbar']}>
              <th colspan="2">Name</th>
              <th>Location</th>
              <th colspan="2">Phone</th>
            </tr>

            {users.map(
              user =>
                <tr className={`${styles.eachitem} class-static`} data-name={user.name} data-avatar={user.avatar} data-email={user.email}>
                  <td width="10px"><img src={user.avatar} className={styles['avatar']} /></td>
                  <td>
                    <div className={styles['name']}>{user.name}</div>
                    <div className={styles['email']}>{ user.email }</div>
                  </td>
                  <td className={styles['city']}>{ user.state }</td>
                  <td>{ user.phone }</td>
                  <td width="30px"><a href="#">&#9776;</a></td>
                </tr>
            )}

          </table>
        </div>
        <div className={styles['add-new']}>&#10010;</div>
      </div>
    </div>
    );
  }
}

export default List2;



      






          