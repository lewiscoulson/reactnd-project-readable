import { combineReducers } from 'redux';
import {
  GET_POSTS,
  GET_CATEGORY_POSTS,
  SET_POSTS_SORT_METHOD,
  GET_POST
} from '../actions/postActions';
import {
  GET_CATEGORIES
} from '../actions/categoryActions';
import {
  GET_COMMENTS,
  EDIT_COMMENT,
  UPDATE_COMMENT,
  SET_COMMENTS_SORT_METHOD,
} from '../actions/commentActions';

function posts (state = {}, action) {
  switch (action.type) {
    case GET_POSTS :
      return {
        ...state,
        posts: action.posts,
      }
    case GET_CATEGORY_POSTS :
      return {
        ...state,
        posts: action.posts,
      }
    case GET_POST :
      return {
        ...state,
        currentPost: action.post,
      }
    case SET_POSTS_SORT_METHOD :
      return {
        ...state,
        sortMethod: action.sortMethod,
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

function comments (state = {}, action) {
  switch (action.type) {
    case GET_COMMENTS :
      return {
        ...state,
        currentComments: action.comments,
      }
    case SET_COMMENTS_SORT_METHOD :
      return {
        ...state,
        sortMethod: action.sortMethod,
      }
    case EDIT_COMMENT :
      return {
        ...state,
        currentComment: action.comment,
        isEditing: true
      }
    case UPDATE_COMMENT :
      return {
        ...state,
        isEditing: false
      }
    default :
      return state
  }
}

export default combineReducers({
  posts,
  categories,
  comments
})