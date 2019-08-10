import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { addPost } from './redux/state'
import { setActive } from './redux/state'

export const renderTree = (state) => {

    ReactDOM.render(<App state={state} addPost={addPost} setActive={setActive}/>, document.getElementById('root'));

}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
