import React, {Component} from 'react'
import styles from '../styles/main.css'
import ContentLoader from 'react-content-loader'

const MyLoader = props => (
  <ContentLoader 
    height={200}
    width={300}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <circle cx="10" cy="20" r="5" /> 
    <rect x="25" y="15" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="10" cy="50" r="5" /> 
    <rect x="25" y="45" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="10" cy="80" r="5" /> 
    <rect x="25" y="75" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="10" cy="110" r="5" /> 
    <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
  </ContentLoader>
)


class Channel extends Component {  
  render() {
    return (
      <div className={styles['main-content']}>
        <div>
          <div className={styles['title-page']}>
            <h2>Channel</h2>
          </div>
          <div className={styles['simple-text']}>Channel is empity</div>
          <div><MyLoader /></div>
        </div>
        
      </div>
    );
  }
}

export default Channel;


      






          