import { combineReducers } from 'redux';
import postsReducer from './PostsReducer';
import usersReducer from './userReducer';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});