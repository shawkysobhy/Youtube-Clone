import { Paper } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SearchBar() {
	const [searchKeyword, setSearchKeywork] = useState('');
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchKeyword !== '') {
			navigate(`/search/${searchKeyword}`);
		}
	};
	return (
		<Paper
			component='form'
			onSubmit={handleSubmit}
			sx={{
				mr: { xs: '0', lg: '2rem' },
				boxShadow: 'none',
				p: '8px 1rem',
				borderRadius: '20px',
			}}>
			<input
				className='search-bar'
				placeholder='Search'
				value={searchKeyword}
				onChange={(e) => {
					setSearchKeywork(e.target.value);
				}}
			/>
		</Paper>
	);
}

export default SearchBar;
