let renderTree = () => {
    console.log('State was changed')
}
const state = {
    dialogsPage: {
        messageData: [
            { id: 1, text: "Hi", isMyMessage: true },
            { id: 2, text: "It`s my new message", isMyMessage: true },
            { id: 3, text: "How are you?", isMyMessage: false },
        ],
        dialogsData: [
            { id: 1, name: "Eduard", isActive: true},
            { id: 2, name: "Sasha", isActive: false},
            { id: 3, name: "Andrew", isActive: false},
            { id: 4, name: "Anna", isActive: false}
        ]
    },
    profilePage: {
        postData: [
            { id: 1, message: "Hi, how are you?" },
            { id: 2, message: "It`s my first post" },
        ],
        newPostText: ""
    }
};

export const addPost = () => {
    const newPost = {
        id: 5,
        message: state.profilePage.newPostText
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    renderTree(state);
}

export const setActive = (id, path) => {
    for (let i of path){
        i.isActive = false;
    }
    path[id-1].isActive = !path[id-1].isActive;
    renderTree(state);
}

export const changeText = (text) => {
    state.profilePage.newPostText = text;
    renderTree(state);
}

export const subscrube = (observer) => {
    renderTree = observer;
}

export default state;