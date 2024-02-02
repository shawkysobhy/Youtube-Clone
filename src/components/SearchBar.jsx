import { Paper } from '@mui/material';
function SearchBar() {
	return (
		<Paper
			component='form'
			onSubmit={(e) => {
				e.preventDefault();
				console.log('submit');
			}}
			sx={{
				mr: { xs: '0', lg: '2rem' },
				boxShadow: 'none',
				p: '8px 1rem',
				borderRadius: '20px',
			}}>
			<input className='search-bar' placeholder='Search' />
		</Paper>
	);
}

export default SearchBar;
