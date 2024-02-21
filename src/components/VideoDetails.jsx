import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { fetchUrl } from '../utils/FetchApi';
import { Typography, Box, Stack } from '@mui/material';
import { VideoCard } from './';
function VideoDetails() {
	const { id } = useParams();
	const [videoDetails, setVideoDetails] = useState(null);
	const [relatedVideos, setRelateVideos] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchVideoDetails = async () => {
			const { data } = await fetchUrl('/videos', {
				part: 'contentDetails,snippet,statistics',
				id: id,
			});
			setVideoDetails(data.items[0]);
			console.log(data);
		};

		const fetchRelatedVideos = async () => {
			try {
				setIsLoading(true);
				const { data, error } = await fetchUrl('/search', {
					relatedToVideoId: id,
					part: 'id,snippet',
					type: 'video',
					maxResults: '50',
				});
				if (error) throw error;
				setRelateVideos(data.items);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
				setIsLoading(false);
			}
		};
		fetchVideoDetails();
		fetchRelatedVideos();
	}, [id]);
	console.log(relatedVideos);
	if (!videoDetails) return '...Loading';
	const {
		snippet: { title, channelId, channelTitle },
		statistics: { viewCount, likeCount },
	} = videoDetails;
	return (
		<Stack
			minHeight={'calc(100% - 64px)'}
			bgcolor={'#000'}
			direction={'row'}
			justifyContent={'center'}>
			<Stack direction={{ xs: 'column', md: 'row' }} sx={{ width: '1280px' }}>
				<Box flex={1}>
					<Box
						sx={{
							position: 'sticky',
							top: '65px',
							height: { xs: '200px', md: '400px', xl: '550px' },
						}}>
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${id}`}
							className='react-player'
							controls={true}
							width='100%'
							height='100%'
						/>
						<Box sx={{ color: 'white' }}>
							<Typography color={'white'}>dsfjlsad</Typography>
							<Typography>dsfjlsad</Typography>
							<Typography>dsfjlsad</Typography>
							<Typography>dsfjlsad</Typography>
							<Typography>dsfjlsad</Typography>
							<Typography>dsfjlsad</Typography>
							<Typography>dsfjlsad</Typography>
							<Typography>dsfjlsad</Typography>
							<Typography>dsfjlsad</Typography>{' '}
							<Typography>dsfjlsad</Typography>
							<Typography>dsfjlsad</Typography>
							<Typography>dsfjlsad</Typography>
							<Typography>dsfjlsad</Typography>
						</Box>
						{/* <Typography variant='h5' color={'#fff'} fontWeight={'bold'}>
							{title}
						</Typography> */}
						<Stack
							direction={'row'}
							justifyContent='space-between'
							sx={{ color: '#fff' }}>
							<Link to={`/channel/${channelId}`}>
								<Typography>{channelTitle}</Typography>
							</Link>
						</Stack>
					</Box>
				</Box>
				<Stack
					sx={{
						maxWidth: '400px',
						padding: '1rem',
						width: { lg: '350px', xl: '400px' },
						gap: '.75rem',
						direction: 'column',
						alignItems: 'center',
						overflowY: 'auto',
					}}>
					{relatedVideos?.map((video) => {
						if (video.id.kind !== 'youtube#video') return;
						return (
							<VideoCard
								key={video.id.videoId}
								video={video}
								customsx={{ flexDirection: 'row' }}
							/>
						);
					})}
				</Stack>
			</Stack>
		</Stack>
	);
}

export default VideoDetails;
