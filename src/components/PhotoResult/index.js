import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const API_KEY = process.env.REACT_APP_API_KEY

const PhotoResult = () => {
	const { photoId } = useParams()
	const [data, setData] = useState(null)
	console.log(data)
	useEffect(() => {
		fetch(
			`https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${API_KEY}&photo_id=${photoId}&format=json&nojsoncallback=1`
		)
			.then((res) => res.json())
			.then((response) => setData(response.photo))
			.catch((error) => console.log(error))
	}, [photoId])

	return data ? (
		<>
			<img
				src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_w.jpg`}
				alt={data.id}
			/>
			<h1>{data.title._content}</h1>
			<p>{data.owner.realname}</p>
			<p>{data.description._content}</p>
		</>
	) : (
		<p>Loading...</p>
	)
}

export default PhotoResult
