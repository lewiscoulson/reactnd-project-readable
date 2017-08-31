export const GET_COMMENTS = 'GET_COMMENTS';
export const SET_COMMENTS_SORT_METHOD = 'SET_COMMENTS_SORT_METHOD';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export function getCommentsSuccess (comments) {
  return {
    type: GET_COMMENTS,
    comments
  }
}

export function getComments (postID) {
	return function (dispatch) {
		return fetch(`http://localhost:5001/posts/${postID}/comments`, { headers: { 'Authorization': 'whatever-you-want' }})
		.then((response) => {
			return response.json()
		})
		.then((comments) => {
			dispatch(getCommentsSuccess(comments))
		});
	}; 
}

export function setCommentsSortMethod (sortMethod) {
  return {
    type: SET_COMMENTS_SORT_METHOD,
    sortMethod
  }
}

export function voteCommentSuccess (comment) {
  return {
    type: VOTE_COMMENT,
    comment
  }
}

export function voteComment (commentID, option) {
	return function (dispatch) {
		return fetch(`http://localhost:5001/comments/${commentID}`, 
			{ 
				headers: { 'Authorization': 'whatever-you-want', 'Content-Type': 'application/json'},
				method: 'POST',
				body: JSON.stringify({option: option})
			})
		.then((response) => {
			return response.json()
		})
		.then((comment) => {
			dispatch(voteCommentSuccess(comment))
		});
	}; 
}

export function addCommentSuccess (comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function addComment (options) {
	return function (dispatch) {
		return fetch(`http://localhost:5001/comments`, 
			{ 
				headers: { 'Authorization': 'whatever-you-want', 'Content-Type': 'application/json'},
				method: 'POST',
				body: JSON.stringify(options)
			})
		.then((response) => {
			return response.json()
		})
		.then((comment) => {
			dispatch(addCommentSuccess(comment))
		});
	}; 
}

export function editComment (comment) {
  return {
    type: EDIT_COMMENT,
    comment
  }
}

export function deleteCommentSuccess (comment) {
  return {
    type: DELETE_COMMENT,
    comment
  }
}

export function deleteComment (commentID) {
	return function (dispatch) {
		return fetch(`http://localhost:5001/comments/${commentID}`, 
			{ 
				headers: { 'Authorization': 'whatever-you-want', 'Content-Type': 'application/json'},
				method: 'DELETE'
			})
		.then((response) => {
			return response.json()
		})
		.then((comment) => {
			dispatch(deleteCommentSuccess(comment))
		});
	}; 
}

export function updateCommentSuccess (comment) {
  return {
    type: UPDATE_COMMENT,
    comment
  }
}

export function updateComment (commentID, options) {
	return function (dispatch) {
		return fetch(`http://localhost:5001/comments/${commentID}`, 
			{ 
				headers: { 'Authorization': 'whatever-you-want', 'Content-Type': 'application/json'},
				method: 'PUT',
				body: JSON.stringify(options)
			})
		.then((response) => {
			return response.json()
		})
		.then((comment) => {
			dispatch(updateCommentSuccess(comment))
		});
	}; 
}
