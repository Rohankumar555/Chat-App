import React, { useState ,useEffect} from 'react';
import styles from './view.module.css'; // Import CSS Module
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ConversationsItem from './conversationsItem';
import SearchComponent from './Searchcomponent';
//import jwtDecode from 'jwt-decode';
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


//import { AutoComplete } from 'primereact/autocomplete';
        
const URL='http://localhost:5000';
const UserHomepage = () => {
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentUser, setCurrentUser] = useState('Megan');
  const navigate=useNavigate();
  // const token = localStorage.getItem('token');
 
  //const decodedToken = jwtDecode(token);
  // useEffect(() => {
  //   const fetchChats = async () => {
  //     try {
  //       const response = await axios.get(URL+'/chats');
  //       setChats(response.data);
  //     }catch (error){
  //       console.error('Error fetching chats:', error);
  //     }
  //   };

  //   fetchChats();
  // }, []);
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/'); // Redirect to login if no user is found
    }
  }, [navigate]);
 
  const [conversations,setConversations]=useState([
    {
        photo:{ backgroundImage: 'url(https://i.pinimg.com/originals/a9/26/52/a926525d966c9479c18d3b4f8e64b434.jpg)' },
        name:"Dave Corlew",
        message:"Let's meet for a coffee or something today ?",
        timer:"3 min"
    },
    {
        photo:{ backgroundImage: 'url(https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80)' },
        name:"Jerome Seiber",
        message:"I've sent you the annual report",
        timer:"42 min"
    },
    {
        photo:{ backgroundImage: 'url(https://card.thomasdaubenton.com/img/photo.jpg)' },
        name:"Thomas Dbtn",
        message:"See you tomorrow ! 🙂",
        timer:"2 hour"
    }
  ]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setConversations({
        ...conversations,
        [name]: value,
    });
    // const user = JSON.parse(localStorage.getItem('user'));
     console.log('User data from localStorage:', user);
};

  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <i className="fa fa-home" aria-hidden="true"></i>
          </li>
          <li className={styles.item}>
            <i className="fa fa-user" aria-hidden="true"></i>
          </li>
          <li className={styles.item}>
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </li>
          <li className={`${styles.item} ${styles.itemActive}`}>
            <i className="fa fa-commenting" aria-hidden="true"></i>
          </li>
          <li className={styles.item}>
            <i className="fa fa-file" aria-hidden="true"></i>
          </li>
          <li className={styles.item}>
            <i className="fa fa-cog" aria-hidden="true"></i>
          </li>
        </ul>
      </nav>

      <div className={styles.mainContent}>
        <section className={styles.discussions}>
          <div className={`${styles.discussion} ${styles.search}`}>
            <div className={styles.searchbar}>
              <i className="fa fa-search" aria-hidden="true"></i>
              <SearchComponent />
            </div>
          </div>
          <div>
                {conversations.map((conversation)=>{
                    return <ConversationsItem props={conversation}/>
                })}
          </div>
          {/* <div className={`${styles.discussion} ${styles.messageActive}`}>
            <div className={styles.photo} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)' }}>
              <div className={styles.online}></div>
            </div>
            <div className={styles.descContact}>
              <p className={styles.name}>Megan Leib</p>
              <p className={styles.message}>9 pm at the bar if possible 😳</p>
            </div>
            <div className={styles.timer}>12 sec</div>
          </div> */}

          {/* <div className={styles.discussion}>
            <div className={styles.photo} style={{ backgroundImage: 'url(https://i.pinimg.com/originals/a9/26/52/a926525d966c9479c18d3b4f8e64b434.jpg)' }}>
              <div className={styles.online}></div>
            </div>
            <div className={styles.descContact}>
              <p className={styles.name}>Dave Corlew</p>
              <p className={styles.message}>Let's meet for a coffee or something today ?</p>
            </div>
            <div className={styles.timer}>3 min</div>
          </div> */}

          {/* <div className={styles.discussion}>
            <div className={styles.photo} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80)' }}></div>
            <div className={styles.descContact}>
              <p className={styles.name}>Jerome Seiber</p>
              <p className={styles.message}>I've sent you the annual report</p>
            </div>
            <div className={styles.timer}>42 min</div>
          </div> */}

          {/* <div className={styles.discussion}>
            <div className={styles.photo} style={{ backgroundImage: 'url(https://card.thomasdaubenton.com/img/photo.jpg)' }}>
              <div className={styles.online}></div>
            </div>
            <div className={styles.descContact}>
              <p className={styles.name}>Thomas Dbtn</p>
              <p className={styles.message}>See you tomorrow ! 🙂</p>
            </div>
            <div className={styles.timer}>2 hour</div>
          </div> */}

          {/* <div className={styles.discussion}>
            <div className={styles.photo} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1553514029-1318c9127859?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80)' }}></div>
            <div className={styles.descContact}>
              <p className={styles.name}>Elsie Amador</p>
              <p className={styles.message}>What the f**k is going on ?</p>
            </div>
            <div className={styles.timer}>1 day</div>
          </div> */}

          {/* <div className={styles.discussion}>
            <div className={styles.photo} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541747157478-3222166cf342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80)' }}></div>
            <div className={styles.descContact}>
              <p className={styles.name}>Billy Southard</p>
              <p className={styles.message}>Ahahah 😂</p>
            </div>
            <div className={styles.timer}>4 days</div>
          </div> */}

          {/* <div className={styles.discussion}>
            <div className={styles.photo} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1435348773030-a1d74f568bc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)' }}>
              <div className={styles.online}></div>
            </div>
            <div className={styles.descContact}>
              <p className={styles.name}>Paul Walker</p>
              <p className={styles.message}>You can't see me</p>
            </div>
            <div className={styles.timer}>1 week</div>
          </div> */}
        </section>
        
        <section className={styles.chat}>
          <div className={styles.headerChat}>
            <i className={`${styles.icon} fa fa-user-o`} aria-hidden="true"></i>
            <p className={styles.name}>{user?.id}</p>
            <i className={`${styles.icon} ${styles.clickable} fa fa-ellipsis-h ${styles.right}`} aria-hidden="true"></i>
          </div>
          <div className={styles.messagesChat}>
      {chats.map((chat) => (
        <div key={chat._id}>
          {chat.sender === currentUser ? (
            <div className={`${styles.message} ${styles.textOnly}`}>
              <p className={styles.text}>{chat.message}</p>
              <p className={styles.time}>{new Date(chat.timestamp).toLocaleTimeString()}</p>
            </div>
          ) : (
            <div className={styles.message}>
              <div className={styles.photo} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)' }}>
                <div className={styles.online}></div>
              </div>
              <p className={styles.text}>{chat.message}</p>
              <p className={styles.time}>{new Date(chat.timestamp).toLocaleTimeString()}</p>
            </div>
          )}
        </div>
      ))}
    </div>
          <div className={styles.footerChat}>
            <i className={`${styles.icon} fa fa-smile-o`} aria-hidden="true"></i>
            <input type="text" className={styles.writeMessage} placeholder="Type your message here" />
            <i className={`${styles.icon} ${styles.send} fa fa-paper-plane`} aria-hidden="true"></i>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserHomepage;
