/* eslint-disable import/no-anonymous-default-export */
import { FETCH_MOVIE_DATA, FETCH_MOVIE_PLOT } from '../types'

// redux state
const initialState = {
	searchResponse: false,
	searchResultArray: [],
	totalResults: 0,
	errorMessage: '',
}

// map search result to the format we want, e.g. (capitalization), but data format is okay here
const mapSearchResult = (result) => {
	// false response
	if (result.Response === 'False') {
		return {
			response: false,
			resultArray: [],
			totalResult: 0,
			errorMessage: result.Error,
		}
	}
	// true response
	if (result.Response === 'True') {
		return {
			response: true,
			resultArray: result.Search,
			totalResults: result.totalResults,
			errorMessage: '',
		}
	}
}

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_MOVIE_DATA:
			const mapData = mapSearchResult(action.payload)
			return {
				...state,
				searchResponse: mapData.response,
				searchResultArray: mapData.resultArray,
				totalResults: mapData.totalResults,
				errorMessage: mapData.errorMessage,
			}
		case FETCH_MOVIE_PLOT:
			return {
				...state,
				// change movie data to specific data with plot when id matches
				searchResultArray: state.searchResultArray.map((movie, i) =>
					movie.imdbID === action.payload.imdbID ? action.payload : movie
				),
			}
		default:
			return state
	}
}
