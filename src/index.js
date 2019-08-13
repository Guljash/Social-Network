import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './redux/state'

let renderTree = (state) => {
    ReactDOM.render(<App 
                        state={state} 
                        addPost={store.addPost.bind(store)} 
                        setActive={store.setActive.bind(store)} 
                        changeText={store.changeText.bind(store)} />, document.getElementById('root'));
}

renderTree(store.getState());

store.subscribe(renderTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
