const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    usersData: []
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(el => {
                    if (el.id === action.id) {
                        return { ...el, isFollowed: false }
                    }
                    return el;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(el => {
                    if (el.id === action.id) {
                        return { ...el, isFollowed: true }
                    }
                    return el;
                })
            }
        case SET_USERS:
            return {...state, usersData: [...state.usersData, ...action.users]}
        default:
            return state

    }
}

export const followAC = (id) => {
    return {
        type: FOLLOW,
        id: id
    }
}
export const unFollowAC = (id) => {
    return {
        type: UNFOLLOW,
        id: id
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}


export default userReducer
