export const GET_POSTS = 'GET_POSTS';

export function getPosts () {
  return {
    type: GET_POSTS,
    posts: [
    	{title: 'first post'},
    	{title: 'second post'},
    	{title: 'third post'},
    ]
  }
}