import { Stack, Box, SvgIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import bell2 from '../assets/bell2.svg';
import { useContext } from 'react';
import { SearchBar } from './';
import { Context } from '../context/AppContext';
import { SlMenu } from 'react-icons/sl';
import Logo from '../assets/logo.png';
import MobileLogo from '../assets/logo-mobile.png';

// import { IoIosSearch } from 'react-icons/io';
import { RiVideoAddLine } from 'react-icons/ri';
import { FiBell } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import User from '../assets/youtbueUser.jpg';

function NavBar() {
	const { openMenu, setOpenMenu, isSmallScreen } = useContext(Context);

	console.log(openMenu);
	return (
		<Stack
			direction='row'
			alignItems={'center'}
			justifyContent='space-between'
			sx={{
				bgcolor: '#000',
				position: 'sticky',
				top: 0,
				zIndex: 20,
				paddingBlock: 1,
				padding: '16px 20px',
				marginInline: 'auto',
				maxHeight: '64px',
			}}>
			<Stack direction='row' alignItems={'center'} sx={{ cursor: 'pointer' }}>
				{isSmallScreen && (
					<Box
						sx={{
							color: 'white',
							alignItems: 'center',
							justifyContent: 'center',
							width: '40px',
							height: '40px',
							mr: '10px',
							display: { xs: 'flex', lg: 'none' },
							'&:hover': {
								borderRadius: '50%',
								backgroundColor: '#303030',
							},
						}}
						onClick={() => setOpenMenu((prev) => !prev)}>
						{openMenu ? <CgClose /> : <SlMenu />}
					</Box>
				)}
				{isSmallScreen ? (
					<Link to='/'>
						<Box
							component='img'
							sx={{
								height: '24px',
								display: 'block',
								maxWidth: '100%',
							}}
							alt='The house from the offer.'
							src={MobileLogo}
						/>
					</Link>
				) : (
					<Link to='/'>
						<Box
							component='img'
							sx={{
								height: '24px',
								display: 'block',
								maxWidth: '100%',
							}}
							alt='The house from the offer.'
							src={Logo}
						/>
					</Link>
				)}
			</Stack>
			<SearchBar />
			<Stack direction={'row'} alignItems='center'>
				<Box
					sx={{
						color: 'white',
						alignItems: 'center',
						justifyContent: 'center',
						width: '40px',
						height: '40px',
						mr: '10px',
						display: isSmallScreen ? 'none' : 'flex',
						'&:hover': {
							borderRadius: '50%',
							backgroundColor: '#303030',
						},
					}}>
					<SvgIcon
						sx={{
							height: '24px',
							width: '24px',
							display: 'block',
						}}>
						<RiVideoAddLine />
					</SvgIcon>
				</Box>
				<Box
					sx={{
						color: 'white',
						alignItems: 'center',
						justifyContent: 'center',
						width: '40px',
						height: '40px',
						mr: '10px',
						display: isSmallScreen ? 'none' : 'flex',
						'&:hover': {
							borderRadius: '50%',
							backgroundColor: '#303030',
						},
					}}>
					<SvgIcon
						sx={{
							height: '24px',
							width: '24px',
							display: 'block',
						}}>
						<FiBell />
					</SvgIcon>
				</Box>
				<Box
					sx={{
						height: '40px',
						width: '40px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Box
						component={'img'}
						sx={{ width: '30px', height: '30px', borderRadius: '50%' }}
						src={User}
					/>
				</Box>
			</Stack>
		</Stack>
	);
}

export default NavBar;
