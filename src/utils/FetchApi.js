import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = {
// 	params: {
// 		maxResults: 50,
// 	},
// 	headers: {
// 		'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
// 		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
// 	},
// };

// export const fetchUrl = async (url) => {
// 	try {
// 		const { data } = await axios.get(`${BASE_URL}/${url}`, options);
// 		return { data: data };
// 	} catch (error) {
// 		console.log('Error fetching data', error);
// 		return { data: null, error: error };
// 	}
// };

export const fetchUrl = async (subUrl, params) => {
	const options = {
		method: 'GET',
		url: BASE_URL + subUrl,
		params: params,
		headers: {
			'X-RapidAPI-Key': '802c4441a1msheca718a5a256d54p128751jsn8b1eb7bc04d4',
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		},
	};
	try {
		const response = await axios.request(options);
		const data = response.data;
		return { data: data };
	} catch (error) {
		return { data: null, error: error };
	}
};
