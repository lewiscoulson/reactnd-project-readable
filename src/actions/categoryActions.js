export const GET_CATEGORIES = 'GET_CATEGORIES';

const getCategoriesSuccess = (categories) => {
  return {
    type: GET_CATEGORIES,
    categories
  };
}

export function getCategories () {
	return function (dispatch) {
		return fetch('http://localhost:5001/categories', { headers: { 'Authorization': 'whatever-you-want' }})
		.then((response) => {
			return response.json()
		})
		.then(({categories}) => {
			dispatch(getCategoriesSuccess(categories))
		});
	}; 
}