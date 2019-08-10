import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from "react-router-dom"
import Friends from './components/Friends/Friends';

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="app-wrapper">
          <Nav />
          <div className="app-wrapper-content">
            <Route path="/profile" render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>} />
            <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} setActive={props.setActive}/>} />
            <Route path="/friends" render={() => <Friends />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;