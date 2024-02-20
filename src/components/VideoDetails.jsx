import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { fetchUrl } from '../utils/FetchApi';
import { Typography, Box, Stack } from '@mui/material';
import { Videos } from './';
function VideoDetails() {
	const { id } = useParams();
	const [videoDetails, setVideoDetails] = useState(null);
	useEffect(() => {
		const fetchVideoDetails = async () => {
			const { data } = await fetchUrl('/videos', {
				part: 'contentDetails,snippet,statistics',
				id: id,
			});
			setVideoDetails(data.items[0]);
			console.log(data);
		};

		fetchVideoDetails();
	}, [id]);

	if (!videoDetails) return '...Loading';
	const {
		snippet: { title, channelId, channelTitle },
		statistics: { viewCount, likeCount },
	} = videoDetails;
	return (
		<Box minHeight={'95vh'}>
			<Stack direction={{ xs: 'column', md: 'row' }}>
				<Box flex={1}>
					<Box sx={{ width: '100%', position: 'sticky' }}>
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${id}`}
							className='react-player'
							controls={true}
						/>
						<Typography variant='h5' color={'#fff'} fontWeight={'bold'}>
							{title}
						</Typography>
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
			</Stack>
		</Box>
	);
}

export default VideoDetails;
