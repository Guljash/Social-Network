const ADD_POST = 'ADD_POST'
const CHANGE_TEXT = 'CHANGE_TEXT'
const SET_ACTIVE = 'SET_ACTIVE'

const store = {

    _state: {
        dialogsPage: {
            messageData: [
                { id: 1, text: "Hi", isMyMessage: true },
                { id: 2, text: "It`s my new message", isMyMessage: true },
                { id: 3, text: "How are you?", isMyMessage: false },
            ],
            dialogsData: [
                { id: 1, name: "Eduard", isActive: true },
                { id: 2, name: "Sasha", isActive: false },
                { id: 3, name: "Andrew", isActive: false },
                { id: 4, name: "Anna", isActive: false }
            ]
        },
        profilePage: {
            postData: [
                { id: 1, message: "Hi, how are you?" },
                { id: 2, message: "It`s my first post" },
            ],
            newPostText: ""
        }
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _callSubscriber() {
        console.log('State was changed')
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD_POST':
                const newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText
                };
                this._state.profilePage.postData.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            case 'SET_ACTIVE':
                for (let i of action.path) {
                    i.isActive = false;
                }
                action.path[action.id - 1].isActive = !action.path[action.id - 1].isActive;
                this._callSubscriber(this._state);
                break;
            case 'CHANGE_TEXT':
                this._state.profilePage.newPostText = action.text;
                this._callSubscriber(this._state);
                break;
            default:
                console.log('Error')
        }
    },
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const changeTextActionCreator = (text) => {
    return {
        type: CHANGE_TEXT,
        text: text,
    }
}

export const setActiveActionCreator = (id, path) => {
    return {
        type: SET_ACTIVE,
        id: id,
        path: path,
    }
}



export default store;