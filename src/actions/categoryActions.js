export const GET_CATEGORIES = 'GET_CATEGORIES';

export function getCategories () {
  return {
    type: GET_CATEGORIES,
    categories: [
    	{name: 'first category'},
    	{name: 'second category'},
    	{name: 'third category'},
    ]
  }
}