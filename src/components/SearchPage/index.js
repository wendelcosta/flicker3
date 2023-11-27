import { useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const SearchPage = () => {
	const [inputValue, setInputValue] = useState('')
	const navigate = useNavigate()
	const { queryText } = useParams()
	const submit = (e) => {
		e.preventDefault()
		navigate(`/search/${inputValue}`)
		// console.log(inputValue)
	}
	return (
		<>
			<h1>Flicker Sample</h1>
			<form onSubmit={(e) => submit(e)}>
				{/* <input
					onChange={(e) => setInputValue(e.target.value)}
					className='border-2 rounded-sm mr-2'
					type='text'
					value={inputValue || queryText}
				/> */}
				<TextField
					onChange={(e) => setInputValue(e.target.value)}
					id='outlined-basic'
					label='Outlined'
					variant='outlined'
					value={inputValue || queryText}
				/>
				{/* <button className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
					Submit
				</button> */}
				<Button variant='contained'>Submit</Button>
			</form>
			<Outlet />
		</>
	)
}

export default SearchPage
