import { Stack } from '@mui/material';
import CatogeryCard from './CatogeryCard';
import { categories } from '../utils/constants';
import { Context } from '../context/AppContext';
import { useContext } from 'react';
function Aside() {
	const { openMenu, isSmallScreen } = useContext(Context);
	return (
		<Stack
			component='aside'
			sx={{
				width: '240px',
				overflowY: 'scroll',
				height: 'calc(100vh - 64px)',
				paddingInline: '1rem',
				color: 'white',
				backgroundColor: '#000',
				flexDirection: 'column',
				paddingBlock: '1.25rem',
				position: isSmallScreen ? 'absolute' : 'relative',
				display: !isSmallScreen ? 'flex' : openMenu ? 'flex' : 'none',
			}}>
			{categories.map((catogry) => {
				return <CatogeryCard key={catogry.name} catogry={catogry} />;
			})}
		</Stack>
	);
}

export default Aside;
