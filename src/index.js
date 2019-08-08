import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';

const postData = [
    { id: 1, message: "Hi, how are you?" },
    { id: 2, message: "It`s my first post" },
  ]

const dialogsData = [
    { id: 1, name: "Eduard" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Andrew" },
    { id: 4, name: "Anna" }
  ]
  
  const messageData = [
    { id: 1, text: "Hi" },
    { id: 2, text: "It`s my new message" },
    { id: 3, text: "How are you?" },
  ]
  

ReactDOM.render(<App md = {messageData} dd = {dialogsData} pd={postData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
