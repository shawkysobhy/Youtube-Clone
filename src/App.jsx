import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Feed, Channel } from './pages';
import { NavBar, SearchFeed, VideoDetails } from './components';
function App() {
	return (
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' exact element={<Feed />} />
					<Route path='/feed' exact element={<Feed />} />
					<Route path='/search/:searchKeyword' exact element={<SearchFeed />} />
					<Route path='/video/:id' exact element={<VideoDetails />} />
					<Route path='/channel/:id' exact element={<Channel />} />
				</Routes>
			</BrowserRouter>
	);
}

export default App;
