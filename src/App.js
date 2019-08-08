import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from "react-router-dom"

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="app-wrapper">
          <Nav />
          <div className="app-wrapper-content">
            <Route path="/profile" render={() => <Profile pd={props.pd}/>} />
            <Route path="/dialogs" render={() => <Dialogs dd={props.dd} md={props.md}/>} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;