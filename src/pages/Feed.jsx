import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { Aside, Videos } from '../components';
import { fetchUrl } from '../utils/FetchApi';
function Feed() {
	const [selectedCategory, setSelectedCategory] = useState('New');
	const [videos, setVideos] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setIsLoading] = useState(false);
	useEffect(() => {
		async function fetchFeed() {
			try {
				setIsLoading(true);
				const { data, error } = await fetchUrl('/search', {
					q: selectedCategory,
					part: 'snippet,id',
					regionCode: 'EG',
					maxResults: '200',
					order: 'date',
				});
				if (error) throw error;
				setVideos(data.items);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
				setIsLoading(false);
				setError(error.message);
			}
		}
		fetchFeed();
	}, [selectedCategory]);
	return (
		<Stack
			sx={{
				flexDirection: 'row',
				height: 'calc(100vh - 64px)',
			}}>
			<Aside
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<Box p={2} sx={{ overflowY: 'auto', flex: 2, bgcolor: '#000' }}>
				{loading ? <h1>Loading</h1> : <Videos videos={videos} />}
			</Box>
		</Stack>
	);
}

export default Feed;
