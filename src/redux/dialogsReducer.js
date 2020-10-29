const CHANGE_MESSAGE_TEXT = 'CHANGE_MESSAGE_TEXT'
const SET_ACTIVE = 'SET_ACTIVE'
const ADD_MESSAGE = "ADD_MESSAGE"

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_MESSAGE:
            let idMsg = state.messageData[state.messageData.length - 1].id + 1
            const newMessage = {
                id: idMsg,
                text: state.newMessageText,
                isMyMessage: true
            };
            if (state.newMessageText !== '') {
                return {
                    ...state,
                    messageData: [...state.messageData, newMessage],
                    newMessageText: ''
                }
            }
            else {
                return state
            }
        case SET_ACTIVE:
            let stateCopy = {
                ...state,
                dialogsData: [...state.dialogsData]
            };
            for (let i of stateCopy.dialogsData) {
                i.isActive = false;
            }
            let path = stateCopy.dialogsData[action.id - 1];
            path.isActive = !path.isActive;
            return stateCopy;
        case CHANGE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            };
        default:
            return state
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const changeMessageTextActionCreator = (text) => {
    return {
        type: CHANGE_MESSAGE_TEXT,
        text: text,
    }
}

export const setActiveActionCreator = (id) => {
    return {
        type: SET_ACTIVE,
        id: id
    }
}


export default dialogsReducer