import MyPosts from './MyPosts'
import { changeTextActionCreator, addPostActionCreator } from './../../../redux/profileReducer'
import { connect } from 'react-redux';


// const MyPostsContainer = (props) => {

//   let state = props.store.getState();

//   const addPost = () => {
//     // props.dispatch({ type: 'ADD_POST' });
//     props.store.dispatch(addPostActionCreator());
//   }

//   const onPostChange = (text) => {
//     let action = changeTextActionCreator(text)
//     props.store.dispatch(action);
//   }

//   return (
//     <MyPosts changeText={onPostChange} addPost={addPost} state={state.profilePage} />
//   );
// }
const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeText: (text) => dispatch(changeTextActionCreator(text)),
    addPost: () => dispatch(addPostActionCreator())
  }
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
