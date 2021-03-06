export const GET_POSTS = 'GET_POSTS';
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS';
export const GET_POST = 'GET_POST';
export const DELETE_POST = 'DELETE_POST';
export const SET_POSTS_SORT_METHOD = 'SET_POSTS_SORT_METHOD';
export const GET_COMMENTS = 'GET_COMMENTS';
export const VOTE_POST = 'VOTE_POST';
export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';

export function getPostsSuccess (posts) {
  return {
    type: GET_POSTS,
    posts
  }
}

export function getPosts () {
	return function (dispatch) {
		return fetch('http://localhost:5001/posts', { headers: { 'Authorization': 'whatever-you-want' }})
		.then((response) => {
			return response.json()
		})
		.then((posts) => {
			dispatch(getPostsSuccess(posts))
		});
	}; 
}

export function getPostSuccess (post) {
  return {
    type: GET_POST,
    post
  }
}

export const getPost = (id) => {
	return function (dispatch) {
		return fetch(`http://localhost:5001/posts/${id}`, { headers: { 'Authorization': 'whatever-you-want' }})
		.then((response) => {
			return response.json()
		})
		.then((post) => {
			dispatch(getPostSuccess(post))
		});
	}; 
}

export function getCategoryPostsSuccess (posts) {
  return {
    type: GET_CATEGORY_POSTS,
    posts
  }
}

export function getCategoryPosts (category) {
	return function (dispatch) {
		return fetch(`http://localhost:5001/${category}/posts`, { headers: { 'Authorization': 'whatever-you-want' }})
		.then((response) => {
			return response.json()
		})
		.then((posts) => {
			dispatch(getCategoryPostsSuccess(posts))
		});
	}; 
}

export function setPostsSortMethod (sortMethod) {
  return {
    type: SET_POSTS_SORT_METHOD,
    sortMethod
  }
}

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

export function deletePostSuccess (post) {
  return {
    type: DELETE_POST,
    post
  }
}

export function deletePost (postID) {
	return function (dispatch) {
		return fetch(`http://localhost:5001/posts/${postID}`, 
			{ 
				headers: { 'Authorization': 'whatever-you-want', 'Content-Type': 'application/json'},
				method: 'DELETE'
			})
		.then((postID) => {
			dispatch(deletePostSuccess(postID))
			dispatch(getPosts())
		});
	}; 
}

export function votePostSuccess (post) {
  return {
    type: VOTE_POST,
    post
  }
}

export function votePost (postID, option) {
	return function (dispatch) {
		return fetch(`http://localhost:5001/posts/${postID}`, 
			{ 
				headers: { 'Authorization': 'whatever-you-want', 'Content-Type': 'application/json'},
				method: 'POST',
				body: JSON.stringify({option: option})
			})
		.then((response) => {
			return response.json()
		})
		.then((post) => {
			dispatch(votePostSuccess(post))
			dispatch(getPost(postID))
			dispatch(getPosts())
		});
	}; 
}

export function createPostSuccess (post) {
  return {
    type: CREATE_POST,
    post
  }
}

export function createPost (options) {
	return function (dispatch) {
		return fetch('http://localhost:5001/posts', 
			{ 
				headers: { 'Authorization': 'whatever-you-want', 'Content-Type': 'application/json'},
				method: 'POST',
				body: JSON.stringify(options)
			})
		.then((response) => {
			return response.json()
		})
		.then((post) => {
			dispatch(createPostSuccess(post))
			dispatch(getPosts())
		});
	}; 
}

export function editPostSuccess (post) {
  return {
    type: EDIT_POST,
    post
  }
}

export function editPost (postID, options) {
	return function (dispatch) {
		return fetch(`http://localhost:5001/posts/${postID}`, 
			{ 
				headers: { 'Authorization': 'whatever-you-want', 'Content-Type': 'application/json'},
				method: 'PUT',
				body: JSON.stringify(options)
			})
		.then((response) => {
			return response.json()
		})
		.then((post) => {
			dispatch(editPostSuccess(post))
		});
	}; 
}