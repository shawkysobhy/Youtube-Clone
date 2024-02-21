/* eslint-disable react/prop-types */
import { BsFillCheckCircleFill } from 'react-icons/bs';

import { Card, CardContent, CardMedia, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

function VideoCard({
	video: {
		id: { videoId },
		snippet,
	},
	customsx,
}) {
	return (
		<Card
			sx={{
				bgcolor: 'black',
				borderRadius: '8px',
				boxSizing: 'border-box',
				color: '#fff',
			}}>
			<Link to={`/video/${videoId}`}>
				<Stack sx={{ direction: 'column', ...customsx }}>
					<CardMedia
						component='img'
						image={snippet?.thumbnails?.high?.url || 'demoThumbnailUrl'}
						alt={snippet.title}
						sx={{
							width: '100%',
							padding: '0',
							height: '137px',
							borderRadius: '8px',
						}}
					/>
					<CardContent
						sx={{
							marginLeft: customsx?.flexDirection == 'row' ? '.75rem' : '0',
							paddingBlock: '16px',
							paddingInline: '0',
							fontSize: '16px',
						}}>
						<Typography>{snippet?.title.slice(0, 50)}</Typography>
						<Stack
							direction='row'
							alignItems={'center'}
							sx={{ paddingRight: '16px' }}>
							<Typography sx={{ color: 'gray', fontSize: '14px' }}>
								{snippet?.channelTitle.slice(0, 50)}
							</Typography>
							<BsFillCheckCircleFill
								color='gray'
								style={{ width: '12px', height: '12px', marginLeft: '5px' }}
							/>
						</Stack>
					</CardContent>
				</Stack>
			</Link>
		</Card>
	);
}

export default VideoCard;
