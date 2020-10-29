const ADD_POST = 'ADD_POST'
const CHANGE_TEXT = 'CHANGE_TEXT'

let initialState =  {
    postData: [
        { id: 2, message: "Hi, how are you?" },
        { id: 1, message: "It`s my first post" },
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let idPost = state.postData[state.postData.length-1].id + 1
            const newPost = {
                id: idPost,
                message: state.newPostText
            };
            if (state.newPostText !== '') {
                return {
                    ...state,
                    postData: [newPost, ...state.postData],
                    newPostText: ''
                }
            }
            else{
                return state
            }
        }
        case CHANGE_TEXT: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        default:
            return state

    }
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

export default profileReducer
