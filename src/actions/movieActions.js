import { FETCH_MOVIE_DATA, FETCH_MOVIE_PLOT } from './../types'

export function fetchMovieData(name) {
	return async function (dispatch) {
		const response = await fetch(
			'https://www.omdbapi.com/?apikey=4f1f7d07&s=' + name,
			{
				// mode: 'cors',
				headers: {
					'Access-Control-Allow-Origin': '*',
				},
			}
		)
		const responseJson = await response.json()

		dispatch({
			type: FETCH_MOVIE_DATA,
			payload: responseJson,
		})

		if (responseJson.Response === 'True') {
			for (let i = 0; i < responseJson.Search.length; i++) {
				dispatch(fetchMoviePlot(responseJson.Search[i].imdbID))
			}
		}
	}
}

export function fetchMoviePlot(id) {
	return async function (dispatch) {
		const response = await fetch(
			`http://www.omdbapi.com/?apikey=4f1f7d07&i=${id}&plot=short`
		)
		const responseJson = await response.json()

		dispatch({
			type: FETCH_MOVIE_PLOT,
			payload: responseJson,
		})
	}
}
