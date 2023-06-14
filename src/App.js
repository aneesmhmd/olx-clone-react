import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Signup from './Pages/Signup'
import LoginPage from './Pages/Login'
import CreatePage from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/PostContext'

function App() {

  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
        <Router>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/signup'>
            <Signup />
          </Route>

          <Route path='/login'>
            <LoginPage />
          </Route>

          <Route path='/create'>
            <CreatePage />
          </Route>

          <Route path='/view'>
            <ViewPost />
          </Route>

        </Router>
      </Post>
    </div>
  );
}

export default App;
