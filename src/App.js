import React from 'react'
import { BrowserRouter as Switch, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Movie from './components/movie'

import './App.css'

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route exact path={'/Code-Challenge'} render={() => <Movie />} />
					</Switch>
				</BrowserRouter>
			</div>
		</Provider>
	)
}

export default App
