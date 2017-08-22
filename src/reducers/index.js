import { combineReducers } from 'redux';
import {
  GET_POSTS,
  GET_POST
} from '../actions/postActions';
import {
  GET_CATEGORIES
} from '../actions/categoryActions';

function posts (state = {}, action) {
  switch (action.type) {
    case GET_POSTS :
      return {
        ...state,
        posts: action.posts,
      }
    case GET_POST :
      return {
        ...state,
        currentPost: action.post,
      }
    default :
      return state
  }
}

function categories (state = {}, action) {
  switch (action.type) {
    case GET_CATEGORIES :
      return {
        ...state,
        categories: action.categories,
      }
    default :
      return state
  }
}

export default combineReducers({
  posts,
  categories
})