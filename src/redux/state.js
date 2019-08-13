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

    _callSubscriber() {
        console.log('State was changed')
    },

    addPost() {
        const newPost = {
            id: 5,
            message: this._state.profilePage.newPostText
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    setActive(id, path) {
        for (let i of path) {
            i.isActive = false;
        }
        path[id - 1].isActive = !path[id - 1].isActive;
        this._callSubscriber(this._state);
    },

    changeText(text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;