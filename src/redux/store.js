import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"

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
            ],
            newMessageText: ""
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
        this._state.profilePage =  profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state);

    },
}

export default store;