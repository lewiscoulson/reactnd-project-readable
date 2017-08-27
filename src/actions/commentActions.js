export const GET_COMMENTS = 'GET_COMMENTS';
export const SET_COMMENTS_SORT_METHOD = 'SET_COMMENTS_SORT_METHOD';

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