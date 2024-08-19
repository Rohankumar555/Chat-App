import React from 'react'
import styles from './view.module.css'
const conversations = ({props}) => {
  return (
     
        
            
          <div className={styles.discussion}>
            <div className={styles.photo} style={props.photo}>
              <div className={styles.online}></div>
            </div>
            <div className={styles.descContact}>
              <p className={styles.name}>{props.name}</p>
              <p className={styles.message}>{props.message}</p>
            </div>
            <div className={styles.timer}>{props.timer}</div>
          </div>
     
    
  )
}

export default conversations;