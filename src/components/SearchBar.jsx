import { TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SearchBar() {
	const styles = (theme) => ({
		textField: {
			width: '90%',
			marginLeft: 'auto',
			marginRight: 'auto',
			paddingBottom: 0,
			marginTop: 0,
			fontWeight: 500,
			border: '1px solid white',
		},
		input: {
			color: 'white',
			shrink: false,
		},
	});

	const [searchKeyword, setSearchKeywork] = useState('');
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchKeyword !== '') {
			navigate(`/search/${searchKeyword}`);
		}
	};
	return (
		<TextField
			placeholder='search'
			InputProps={{
				padding: 0,
			}}
			style={{
				backgroundColor: 'black',
				padding: 0,
			}}
			margin='normal'
			sx={{
				'& .MuiInputBase-root': {
					padding: 0,
					margin: 0,
					border: 'solid 1px #303030',
					height: '38px',
					width: { xs: '10rem', sm: '400px', md: '500px' },
				},
				'& .MuiInputBase-input': {
					padding: 0,
					color: '#fff',
				},
				'& .MuiTextField-root': {
					margin: 0,
				},
			}}
			variant='outlined'
		/>
	);
}

export default SearchBar;
