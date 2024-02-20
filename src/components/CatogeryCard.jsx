/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
function CatogeryCard({ catogry, selectedCategory, setSelectedCategory }) {
	return (
		<Box
			onClick={() => {
				setSelectedCategory(catogry.name);
			}}
			sx={{
				marginTop: '1px',
				padding: '8px 12px',
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				cursor: 'pointer',
				borderRadius: '10px',
				backgroundColor: selectedCategory === catogry.name ? '#303030' : '#000',
				'&:hover': {
					backgroundColor: '#303030',
					opacity: '.9',
				},
			}}>
			<Box sx={{ fontSize: '1.25rem', marginRight: '1.25rem' }}>
				{catogry.icon}
			</Box>
			<Typography sx={{ fontSize: '14px' }}>{catogry.name}</Typography>
		</Box>
	);
}

export default CatogeryCard;
