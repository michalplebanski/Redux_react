import { combineReducers } from 'redux';
import comments from '../components/comments.js';
import users from '../components/users.js';

const reducer = combineReducers({
	comments,
	users
});

export default reducer;