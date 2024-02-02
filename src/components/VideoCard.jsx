/* eslint-disable react/prop-types */
import { CheckCircle } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

function VideoCard({
	video: {
		id: { videoId },
		snippet,
	},
}) {
	return (
		<Card
			sx={{
				bgcolor: 'black',
				borderRadius: '8px',
				boxSizing: 'border-box',
				color: '#fff',
			}}>
			<Link to={`video/${videoId}`}>
				<CardMedia
					component='img'
					image={snippet?.thumbnails?.high?.url || 'demoThumbnailUrl'}
					alt={snippet.title}
					sx={{ width: '100%', padding: '0', height: '137px' }}
				/>
				<CardContent
					sx={{ paddingBlock: '16px', paddingInline: '0', fontSize: '16px' }}>
					<Typography>{snippet?.title.slice(0, 50)}</Typography>
					<Stack
						direction='row'
						alignItems={'row'}
						sx={{ paddingRight: '16px' }}>
						<Typography sx={{ color: 'gray', fontSize: '14px' }}>
							{snippet?.channelTitle.slice(0, 50)}
						</Typography>
						<CheckCircle
							sx={{ width: '12px', color: '#808080', paddingLeft: '5px' }}
						/>
					</Stack>
				</CardContent>
			</Link>
		</Card>
	);
}

export default VideoCard;
