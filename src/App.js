import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from "react-router-dom"
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="app-wrapper">
          <Nav />
          <div className="app-wrapper-content">
            <Route path="/profile" render={() => <Profile store={props.store}/>} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/friends" render={() => <Friends />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
