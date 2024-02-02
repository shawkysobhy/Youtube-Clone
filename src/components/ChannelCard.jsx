/* eslint-disable react/prop-types */
import { Card, CardMedia, Typography, Stack, CardContent } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl } from '../utils/constants';
function ChannelCard({
	channel: {
		id: { channelId },
		snippet: { channelTitle, thumbnails },
	},
}) {
	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				bgcolor: 'black',
				borderRadius: '8px',
				boxSizing: 'border-box',
				color: '#fff',
			}}>
			<CardMedia
				component='img'
				image={thumbnails?.high?.url || demoThumbnailUrl}
				alt={channelTitle || 'channel Title'}
				sx={{
					width: '180px',
					padding: '0',
					height: '180px',
					borderRadius: '50%',
				}}
			/>
			<CardContent>
				<Stack direction='row' alignItems={'row'} sx={{ paddingRight: '16px' }}>
					<Typography
						sx={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>
						{channelTitle.slice(0, 50) || 'demoChannelTitle'}
					</Typography>
					<CheckCircle
						sx={{ width: '15px', color: '#fff', paddingLeft: '5px' }}
					/>
				</Stack>
			</CardContent>
		</Card>
	);
}

export default ChannelCard;
