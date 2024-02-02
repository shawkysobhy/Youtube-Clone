import { Stack } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import CatogeryCard from './CatogeryCard';

const categories = [
	{ name: 'New', icon: <HomeIcon /> },
	{ name: 'Coding', icon: <CodeIcon /> },
	{ name: 'ReactJS', icon: <CodeIcon /> },
	{ name: 'NextJS', icon: <CodeIcon /> },
	{ name: 'Music', icon: <MusicNoteIcon /> },
	{ name: 'Education', icon: <SchoolIcon /> },
	{ name: 'Podcast', icon: <GraphicEqIcon /> },
	{ name: 'Movie', icon: <OndemandVideoIcon /> },
	{ name: 'Gaming', icon: <SportsEsportsIcon /> },
	{ name: 'Live', icon: <LiveTvIcon /> },
	{ name: 'Sport', icon: <FitnessCenterIcon /> },
	{ name: 'Fashion', icon: <CheckroomIcon /> },
	{ name: 'Beauty', icon: <FaceRetouchingNaturalIcon /> },
	{ name: 'Comedy', icon: <TheaterComedyIcon /> },
	{ name: 'Gym', icon: <FitnessCenterIcon /> },
	{ name: 'Crypto', icon: <DeveloperModeIcon /> },
];
function Aside({ selectedCategory, setSelectedCategory }) {
	return (
		<Stack
			component='aside'
			sx={{
				flexDirection: { xs: 'row', md: 'column' },
				overflowY: 'auto',
				color: 'white',
				backgroundColor: '#101010',
				height: 'auto',
				gap: '10px',
			}}>
			{categories.map((catogry) => {
				return (
					<CatogeryCard
						key={catogry.name}
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
						sx={{ padding: '1rem 2rem' }}
						catogry={catogry}
					/>
				);
			})}
		</Stack>
	);
}

export default Aside;

// <Typography
// 	sx={{ color: 'white', backgroundColor: '#101010', height: '100vh' }}>
// 	aside
// </Typography>
