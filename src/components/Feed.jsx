import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Aside, Videos } from './';
import { fetchUrl } from '../utils/FetchApi';
function Feed() {
	const [selectedCategory, setSelectedCategory] = useState('New');
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		fetchUrl(`search?q=${selectedCategory}&part=snippet`).then((data) =>
			setVideos(data.items)
		);
	}, [selectedCategory]);
	return (
		<Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
			<Box
				sx={{
					height: { sx: 'auto', md: '92vh' },
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
		</Stack>
	);
}

export default Feed;
