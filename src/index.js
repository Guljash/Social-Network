import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { addPost, setActive, changeText, subscrube } from './redux/state'
import state from './redux/state'

let renderTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost} setActive={setActive} changeText={changeText} />, document.getElementById('root'));
}

renderTree(state);

subscrube(renderTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
