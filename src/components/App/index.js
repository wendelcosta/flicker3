import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SearchPage from '../SearchPage'
import SearchResults from '../SearchResults'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SearchPage />}>
					<Route path='/search/:queryText' element={<SearchResults />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
