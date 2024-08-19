import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createBrowserRouter,
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider
} from "react-router-dom";
import Login from './components/Registration/login';
import Home from './components/Home/home'
import Homepage from './components/Chat-View/user_homepage'
import View from './components/New-View/view'
const URL="http://localhost:3000/"
const App = () => {
  //const [posts, setPosts] = useState([]);

  //  useEffect(() => {
  //     axios
  //        .get(URL+)
  //        .then((response) => {
  //           setPosts(response.data);
  //        })
  //        .catch((err) => {
  //           console.log(err);
  //        });
  //  }, []);
   
  return (
    <>
    <CssBaseline />
      <Router>
         
          <Routes>
          <Route
            path="/"
            element={<Home/>}
            > 
            </Route>
            <Route
            path="/login"
            element={<Login/>}
            >  
            </Route>
            <Route
            path="/Homepage"
            element={<Homepage/>}
            >   
            </Route>
            <Route
            path="/View"
            element={<View/>}
            >   
            </Route>
          </Routes>
       </Router> 
       </>
  );
};

export default App;
