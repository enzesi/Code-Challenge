import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
	Box,
	Typography,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	CardActions,
	Button,
} from '@material-ui/core'
import ls from 'local-storage'

const useStyles = makeStyles(() => ({
	card: {
		maxWidth: 450,
	},
	media: {
		height: 600,
	},
}))

const MovieCard = ({ props }) => {
	const classes = useStyles()
	const movie = props

	const handleNominate = (movie) => {
		if (localStorage.getItem('nominatedMovies') === null) {
			localStorage.setItem('nominatedMovies', JSON.stringify([movie]))
		} else {
			const nominatedArray = JSON.parse(localStorage.getItem('nominatedMovies'))
			nominatedArray.push(movie)
			localStorage.setItem('nominatedMovies', JSON.stringify(nominatedArray))
		}
	}

	return (
		<React.Fragment>
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={movie.Poster}
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{movie.Title}({movie.Year})
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{movie.Plot}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						size="small"
						color="primary"
						onClick={() => handleNominate(movie)}
					>
						{JSON.parse(localStorage.getItem('nominatedMovies')).some(
							(m) => m.imdbID === movie.imdbID
						) ? (
							<Box>Innominate</Box>
						) : (
							<Box>Nominate</Box>
						)}
					</Button>
				</CardActions>
			</Card>
		</React.Fragment>
	)
}

export default MovieCard
