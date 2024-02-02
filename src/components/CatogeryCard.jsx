/* eslint-disable react/prop-types */
import { Box } from '@mui/material';
function CatogeryCard({ catogry, selectedCategory, setSelectedCategory }) {
	return (
		<Box
			onClick={() => {
				setSelectedCategory(catogry.name);
			}}
			sx={{
				m: 0,
				color: 'white',
				padding: '8px 12px',
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				gap: '10px',
				cursor: 'pointer',
        borderRadius:'20px',
				backgroundColor: selectedCategory === catogry.name ? 'red' : '#101010',
				'&:hover': {
					backgroundColor: '#323131',
          opacity:'.9'
				},
			}}>
			<Box sx={{ color: selectedCategory === catogry.name ? 'white' : 'red' }}>
				{catogry.icon}
			</Box>
			<Box>{catogry.name}</Box>
		</Box>
	);
}

export default CatogeryCard;
