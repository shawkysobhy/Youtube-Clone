import { Stack, Grid, Typography } from '@mui/material';
import { useEffect, useState, useContext } from 'react';
import { Context } from '../context/AppContext';
import { Aside, VideoCard, ChannelCard, PlaylistCard } from '../components';
import { fetchUrl } from '../utils/FetchApi';
function Feed() {
	const { selectedCategory } = useContext(Context);
	console.log('feed', selectedCategory);
	const [videos, setVideos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	useEffect(() => {
		async function fetchFeed() {
			try {
				setIsLoading(true);
				const { data, error } = await fetchUrl('/search', {
					q: selectedCategory,
					part: 'snippet,id',
					regionCode: 'US',
					maxResults: '60',
					order: 'date',
				});
				if (error) throw error;
				setVideos(data.items);
				if (data.error) {
					setError(data.error.message);
				}
				setIsLoading(false);
			} catch (error) {
				console.log(error);
				setIsLoading(false);
			}
		}
		fetchFeed();
	}, [selectedCategory]);
	return (
		<Stack
			sx={{
				flexDirection: 'row',
				bgcolor: '#000',
				height: 'calc(100vh - 64px)',
			}}>
			<Aside />
			{isLoading && <h1>Loading .....</h1>}
			{!isLoading && (
				<Grid
					spacing={2}
					container
					sx={{
						overflowY: 'auto',
						padding: '3rem 1.25rem',
						flex: 2,
					}}>
					{error && <Typography sx={{color:'white'}}>{error}</Typography>}
					{videos?.map((item, i) => {
						return (
							<Grid item xs={12} sm={6} md={4} xl={3} key={i}>
								{item.id.videoId && <VideoCard video={item} />}
								{item.id.channelId && <ChannelCard channel={item} />}
								{item.id.playlistId && <PlaylistCard playlist={item} />}
							</Grid>
						);
					})}
				</Grid>
			)}
		</Stack>
	);
}

export default Feed;
