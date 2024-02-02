/* eslint-disable react/prop-types */
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { demoThumbnailUrl } from '../utils/constants';
import { Card, CardContent, CardMedia, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
function PlaylistCard({ playlist: { snippet } }) {
	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				bgcolor: 'black',
				borderRadius: '8px',
				boxSizing: 'border-box',
			}}>
			<CardMedia
				component='img'
				image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
				alt={snippet?.channelTitle || 'channel Title'}
				sx={{
					padding: '0',
					height: '180px',
				}}
			/>
			<Link to={`playlist/${'playlistId'}`}></Link>
			<CardContent
				sx={{
					paddingBlock: '16px',
					paddingRight: '20px',
					paddingInline: '0',
					fontSize: '16px',
					color: '#fff',
					position: 'relative',
				}}>
				<Stack direction='row' alignItems={'row'} justifyContent={'flex-start'}>
					<Typography>{snippet?.title.slice(0, 50)}</Typography>
					<PlaylistPlayIcon
						sx={{ width: '30px', height: '30px', color: '#fff' }}
					/>
				</Stack>
				<Typography sx={{ color: 'gray', fontSize: '14px' }}>
					{snippet?.channelTitle.slice(0, 50)}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default PlaylistCard;
