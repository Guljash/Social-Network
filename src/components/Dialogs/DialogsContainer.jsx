import { changeMessageTextActionCreator, addMessageActionCreator, setActiveActionCreator} from './../../redux/dialogsReducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {

//   let state = props.store.getState();

//   const onMessageChange = (text) => {
//     props.store.dispatch(changeMessageTextActionCreator(text));
//   }

//   const addMessage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   }

//   return (
//     <Dialogs onMessageChange={onMessageChange} addMessage={addMessage} state={state.dialogsPage} />
//   );
// }

let mapStateToProps = (state) => {
  return{
    dialogsPage: state.dialogsPage
  } 
}

let mapDispatchToProps = (dispatch) => {
 return{
    onMessageChange: (text) => {dispatch(changeMessageTextActionCreator(text))},
    addMessage: () => {dispatch(addMessageActionCreator())},
    setActive: (id) => {dispatch(setActiveActionCreator(id))}
 } 
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;