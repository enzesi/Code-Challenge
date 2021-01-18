import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {
	Typography,
	Paper,
	Box,
	Grid,
	TextField,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ls from 'local-storage'
//import MovieCard from './movieCard'

import { fetchMovieData } from './../actions/movieActions'

const searchResultArraySelector = (state) => state.movie.searchResultArray
const searchTotalResultsSelector = (state) => state.movie.totalResults
const searchResponseSelector = (state) => state.movie.searchResponse
const searchErrorMessageSelector = (state) => state.movie.errorMessage

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: 50,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: 'auto',
		width: 'auto',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
	},
	paper: {
		padding: theme.spacing(2),
	},
	grid: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	search: {
		width: 353,
	},
	result: {
		marginBottom: 10,
	},
	card: {
		maxWidth: 450,
	},
	media: {
		height: 600,
	},
}))

const Movie = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const searchResultsArray = useSelector(searchResultArraySelector)
	const searchTotalResults = useSelector(searchTotalResultsSelector)
	const searchResponse = useSelector(searchResponseSelector)
	const searchErrorMessage = useSelector(searchErrorMessageSelector)
	const [inputValue, setInputValue] = useState('')
	const [nominatedMovies, setNominatedMovies] = useState(
		JSON.parse(ls.get('nominatedMovies'))
	)

	const handleInputValue = (value) => {
		setInputValue(value)
	}

	const handleKeyPress = (value) => {
		if (value === 'Enter') {
			dispatch(fetchMovieData(inputValue))
		}
	}

	const handleNominate = (movie) => {
		if (ls.get('nominatedMovies') === null) {
			ls.set('nominatedMovies', JSON.stringify([movie]))
			setNominatedMovies([movie])
		} else {
			const nominatedArray = JSON.parse(ls.get('nominatedMovies'))
			nominatedArray.push(movie)
			ls.set('nominatedMovies', JSON.stringify(nominatedArray))
			setNominatedMovies(nominatedArray)
		}
	}

	const handleInnominate = (movie) => {
		const nominatedArray = JSON.parse(ls.get('nominatedMovies')).filter(
			(m) => movie.imdbID !== m.imdbID
		)

		ls.set('nominatedMovies', JSON.stringify(nominatedArray))
		setNominatedMovies(nominatedArray)
	}

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Typography variant="h4">The Shoppies</Typography>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Grid container spacing={1} alignItems="flex-end">
							<Grid item>
								<SearchIcon />
							</Grid>
							<Grid item>
								<TextField
									className={classes.search}
									label="Search by Movie Title"
									value={inputValue}
									onChange={(e) => handleInputValue(e.target.value)}
									onKeyDown={(e) => handleKeyPress(e.key)}
								/>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Typography variant="h4" className={classes.result}>
							My Nominations
						</Typography>
						{nominatedMovies === null ? (
							<Typography variant="h5" className={classes.result}>
								None
							</Typography>
						) : (
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1bh-content"
									id="panel1bh-header"
								>
									<Typography className={classes.heading}>
										Total Nominations: {nominatedMovies.length}
									</Typography>
									<Typography className={classes.secondaryHeading}></Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Grid container spacing={3}>
										{nominatedMovies.map((movie, i) => (
											<Grid item xs={12} sm={4} key={i}>
												<Box className={classes.grid}>
													<Card className={classes.card}>
														<CardActionArea>
															<CardMedia
																className={classes.media}
																image={movie.Poster}
																title="Contemplative Reptile"
															/>
															<CardContent>
																<Typography
																	gutterBottom
																	variant="h5"
																	component="h2"
																>
																	{movie.Title}({movie.Year})
																</Typography>
																<Typography
																	variant="body2"
																	color="textSecondary"
																	component="p"
																>
																	{movie.Plot}
																</Typography>
															</CardContent>
														</CardActionArea>
														<CardActions>
															{nominatedMovies &&
															nominatedMovies.some(
																(m) => m.imdbID === movie.imdbID
															) ? (
																<Button
																	size="small"
																	color="primary"
																	onClick={() => handleInnominate(movie)}
																>
																	Innominate
																</Button>
															) : (
																<Button
																	size="small"
																	color="primary"
																	onClick={() => handleNominate(movie)}
																>
																	Nominate
																</Button>
															)}
														</CardActions>
													</Card>
												</Box>
											</Grid>
										))}
									</Grid>
								</AccordionDetails>
							</Accordion>
						)}
					</Paper>
				</Grid>
				<Grid item xs={12}>
					{searchResultsArray.length === 0 ? null : (
						<Paper className={classes.paper}>
							<Typography variant="h4" className={classes.result}>
								Results for: "{inputValue}"
							</Typography>
							<Typography variant="h4" className={classes.result}>
								Total: {searchTotalResults}
							</Typography>
							{searchResponse ? (
								<Grid container spacing={3}>
									{searchResultsArray.map((movie, i) => (
										<Grid item xs={12} sm={4} key={i}>
											<Box className={classes.grid}>
												<Card className={classes.card}>
													<CardActionArea>
														<CardMedia
															className={classes.media}
															image={movie.Poster}
															title="Contemplative Reptile"
														/>
														<CardContent>
															<Typography
																gutterBottom
																variant="h5"
																component="h2"
															>
																{movie.Title}({movie.Year})
															</Typography>
															<Typography
																variant="body2"
																color="textSecondary"
																component="p"
															>
																{movie.Plot}
															</Typography>
														</CardContent>
													</CardActionArea>
													<CardActions>
														{nominatedMovies &&
														nominatedMovies.some(
															(m) => m.imdbID === movie.imdbID
														) ? (
															<Button
																size="small"
																color="primary"
																onClick={() => handleInnominate(movie)}
															>
																Innominate
															</Button>
														) : (
															<Button
																size="small"
																color="primary"
																onClick={() => handleNominate(movie)}
															>
																Nominate
															</Button>
														)}
													</CardActions>
												</Card>
											</Box>
										</Grid>
									))}
								</Grid>
							) : (
								<Box>{searchErrorMessage}</Box>
							)}
						</Paper>
					)}
				</Grid>
			</Grid>
		</div>
	)
}

export default Movie
