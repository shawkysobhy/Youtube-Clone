import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Aside, Videos } from '../components';
import { fetchUrl } from '../utils/FetchApi';
function Feed() {
	const [selectedCategory, setSelectedCategory] = useState('New');
	const [videos, setVideos] = useState([]);
	const [error, setError] = useState(null);
	const [dataloaded, setDataLoaded] = useState(false);
	useEffect(() => {
		async function fetchFeed() {
			try {
				const { data, error } = await fetchUrl('/search', {
					q: selectedCategory,
					part: 'snippet,id',
					regionCode: 'EG',
					maxResults: '200',
					order: 'date',
				});
				if (error) throw error;
				setVideos(data.items);
				setDataLoaded(true);
			} catch (error) {
				console.log(error);
				setDataLoaded(false);
				setError(error.message);
			}
		}
		fetchFeed();
	}, [selectedCategory]);
	console.log(dataloaded);
	return (
		<Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
			<Box
				sx={{
					height: { sx: 'auto' },
					borderRight: '1px solid #3d3d3d',
					backgroundColor: '#101010',
					minWidth: '150px',
					pr: { xs: 0, md: 2 },
				}}>
				<Aside
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
			</Box>
			{dataloaded ? (
				<Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
					<Typography
						variant='h4'
						fontWeight='bold'
						mb={2}
						sx={{ color: 'white' }}>
						{selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
					</Typography>
					<Videos videos={videos} />
				</Box>
			) : (
				<Typography
					sx={{
						color: 'white',
						padding: '1rem 2rem',
						fontSize: '18px',
						fontWeight: 'bold',
						backgroundColor: 'red',
					}}>
					{error}
				</Typography>
			)}
		</Stack>
	);
}

export default Feed;
