import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'

const API_KEY = process.env.REACT_APP_API_KEY

const SearchResults = () => {
	const { queryText } = useParams()
	let navigate = useNavigate()
	const [photos, setPhotos] = useState([])

	useEffect(() => {
		fetch(
			`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${queryText}&format=json&nojsoncallback=1`
		)
			.then((res) => res.json())
			.then((data) => setPhotos(data.photos.photo))
			.catch((error) => console.log(error))
	}, [queryText])

	return (
		<>
			{photos.length ? (
				<ImageList
					sx={{ width: '100%', height: '80vh', margin: '10px auto 0' }}
				>
					{photos.map((item) => (
						<ImageListItem key={item.id}>
							<img
								src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_w.jpg`}
								alt={item.title}
								loading='lazy'
							/>
							<ImageListItemBar
								title={item.title}
								actionIcon={
									<IconButton
										sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
										aria-label={`info about ${item.title}`}
										onClick={() => navigate(`/photo/${item.id}`)}
									>
										<InfoIcon />
									</IconButton>
								}
							/>
						</ImageListItem>
					))}
				</ImageList>
			) : (
				<p>Loading</p>
			)}
		</>
	)
}

export default SearchResults
