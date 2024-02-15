import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Videos } from '../components';
import { fetchUrl } from '../utils/FetchApi';
import { useParams } from 'react-router-dom';
function SearchFeed() {
	const { searchKeyword } = useParams();
	const [videos, setVideos] = useState([]);
	const [loading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [dataloaded, setDataLoaded] = useState(false);
	useEffect(() => {
		async function fetchFeed() {
			try {
				setIsLoading(true);
				const { data, error } = await fetchUrl('/search', {
					q: searchKeyword,
					part: 'snippet,id',
					maxResults: '200',
					order: 'date',
				});
				if (error) throw error;
				setVideos(data.items);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
				setDataLoaded(false);
				setError(error.message);
			}
		}
		fetchFeed();
	}, [searchKeyword]);
	console.log(dataloaded);
	return (
		<Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
			{loading ? (
				<h1>Loading</h1>
			) : (
				<Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
					<Videos videos={videos} />
				</Box>
			)}
		</Stack>
	);
}

export default SearchFeed;
/**				<Typography
					sx={{
						color: 'white',
						padding: '1rem 2rem',
						fontSize: '18px',
						fontWeight: 'bold',
						backgroundColor: 'red',
					}}>
					{error}
				</Typography> */
