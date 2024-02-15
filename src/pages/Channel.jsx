import { Box, CardMedia, Stack, CardContent, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchUrl } from '../utils/FetchApi';
import { CheckCircle } from '@mui/icons-material';

import { useState, useEffect } from 'react';
import { demoThumbnailUrl } from '../utils/constants';
import { Videos } from '../components';
function formatNumberWithCommas(number = 0) {
	const numberString = number.toString();
	return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function Channel() {
	const [videos, setVideos] = useState(null);
	const [channelDetails, setChannelDetail] = useState(null);
	const { id } = useParams();
	useEffect(() => {
		async function getChannelDetails() {
			try {
				const {
					data: { items },
				} = await fetchUrl('/channels', {
					part: 'snippet,statistics',
					id: id,
				});

				setChannelDetail({
					banner: items[0]?.brandingSettings?.image?.bannerExternalUrl,
					title: items[0]?.snippet?.title,
					description: items[0]?.snippet?.description,
					customUrl: items[0]?.snippet?.customUrl,
					high: items[0]?.snippet?.thumnails?.high,
					thumbnails: items[0]?.snippet?.thumbnails,
					medium: items[0]?.snippet?.thumnails?.medium,
					statistics: {
						subscriberCount: items[0]?.statistics?.subscriberCount,
						videoCount: items[0]?.statistics?.videoCount,
					},
				});
				console.log('channel', items);
			} catch (error) {
				console.log('channel', error);
			}
		}
		async function getChannelVideos() {
			try {
				const { data, error } = await fetchUrl('/search', {
					channelId: id,
					part: 'snippet,id',
					order: 'date',
					maxResults: '50',
				});
				if (error) throw error;
				setVideos(data.items);
			} catch (error) {
				console.log(error);
			}
		}

		getChannelDetails();
		getChannelVideos();
	}, [id]);
	console.log(channelDetails);
	console.log(videos);
	return (
		<Box>
			<Box
				sx={{
					marginInline: 'auto',
					height: '170px',
					background:
						'linear-gradient(180deg, hsla(205, 46%, 10%, 1) 0%, hsla(0, 0%, 8%, 1) 100%, hsla(207, 41%, 27%, 1) 100%, hsla(206, 16%, 9%, 1) 100%)',
				}}>
				<CardMedia
					component='img'
					image={channelDetails?.banner || demoThumbnailUrl}
					alt={channelDetails?.title || 'channel Title'}
					sx={{
						height: '100%',
						maxWidth: '1000px',
						marginInline: 'auto',
						backgroundSize: 'cover',
					}}
				/>
			</Box>
			<Box
				sx={{
					maxWidth: '1400px',
					marginInline: 'auto',
					paddingInline: '3rem',
				}}>
				<Stack
					sx={{ flexDirection: 'row', padding: '1rem', alignItems: 'center' }}>
					<CardMedia
						component='img'
						image={channelDetails?.thumbnails?.high?.url || demoThumbnailUrl}
						alt={channelDetails?.title || 'channel Title'}
						sx={{
							width: '140px',
							padding: '0',
							paddingBlock: '25px',
							height: '140px',
							borderRadius: '50%',
						}}
					/>
					<CardContent>
						<Stack direction={'column'} gap={'7px'}>
							<Stack
								direction='row'
								alignItems={'center'}
								sx={{ paddingRight: '16px' }}>
								<Typography
									sx={{ color: '#fff', fontSize: '36px', fontWeight: 'bold' }}>
									{channelDetails?.title?.slice(0, 50) || 'channel title'}
								</Typography>
								<CheckCircle
									sx={{ width: '14px', color: 'gray', paddingLeft: '5px' }}
								/>
							</Stack>
							<Stack direction={'row'} gap={'7px'}>
								<Typography sx={{ color: '#aaa' }}>
									{channelDetails?.customUrl || 'custom Url '}
								</Typography>
								<Typography sx={{ color: '#aaa' }}>
									{`${formatNumberWithCommas(
										channelDetails?.statistics?.subscriberCount
									)}  subscribers`}
								</Typography>
								<Typography sx={{ color: '#aaa' }}>
									{`${formatNumberWithCommas(
										channelDetails?.statistics?.videoCount
									)} videos`}
								</Typography>
							</Stack>
							<Typography sx={{ color: '#aaa', fontSize: '14px' }}>
								{channelDetails?.description.split('.')[0]}
							</Typography>
						</Stack>
					</CardContent>
				</Stack>
				<Videos videos={videos} />
			</Box>
		</Box>
	);
}

export default Channel;
