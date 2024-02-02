import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {SearchBar} from './';
function NavBar() {
	return (
		<Stack
			direction='row'
			alignItems={'center'}
			justifyContent='space-between'
			sx={{
				bgcolor: '#151515',
				paddingBlock: 1,
				paddingInline: { xs: 1, lg: 3 },
				marginInline: 'auto',
			}}>
			<Link>
				<Stack direction='row' alignItems='center'>
					<YouTubeIcon sx={{ color: 'red', width: '32px', height: '32px' }} />
					<Typography
						sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'white' }}>
						Youtube
					</Typography>
				</Stack>
			</Link>
			<SearchBar />
		</Stack>
	);
}

export default NavBar;
