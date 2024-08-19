import React,{Fragment} from 'react';
import styles from './user_homepage.module.css'; // Import CSS Module
import 'bootstrap/dist/css/bootstrap.min.css'; 
// import $ from 'jquery'; 
// import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
// UserHomepage.js



const UserHomepage = () => {
  return (
     
<div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.header}>Chat Users</div>
        <div className={styles.userList}>
          <div>User 1</div>
          <div>User 2</div>
          <div>User 3</div>
          <div>User 4</div>
        </div>
        <div className={styles.footer}>
          <div className={styles.options}>
            <button>Logout</button>
            <button>Settings</button>
          </div>
        </div>
      </div>
      <div className={styles.chatContainer}>
        <div className={styles.chatHeader}>Chat with User 1</div>
        <div className={styles.chatWindow}>
          {/* Chat messages will appear here */}
        </div>
        <div className={styles.chatInput}>
          <input type="text" placeholder="Type your message..." />
          <button>Send</button>
        </div>
      </div>
    </div>


  );
};

export default UserHomepage;
