export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';

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

export const getPost = (id, another) => {
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