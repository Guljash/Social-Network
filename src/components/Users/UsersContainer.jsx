
import { connect } from 'react-redux';
import { followAC, setUsersAC, unFollowAC } from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
  return{
    state: state.usersData
  } 
}

let mapDispatchToProps = (dispatch) => {
 return{
   follow: (id) => {dispatch(followAC(id))},
   unfollow: (id) => {dispatch(unFollowAC(id))},
   setUsers: (users) => {dispatch(setUsersAC(users))},
 } 
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;