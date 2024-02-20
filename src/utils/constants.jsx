

import { AiFillHome, AiOutlineFlag } from 'react-icons/ai';
import { MdLocalFireDepartment, MdLiveTv } from 'react-icons/md';
import { CgMusicNote } from 'react-icons/cg';
import { FiFilm } from 'react-icons/fi';
import { IoGameControllerSharp } from 'react-icons/io5';
import { ImNewspaper } from 'react-icons/im';
import { GiDiamondTrophy, GiEclipse } from 'react-icons/gi';
import { RiLightbulbLine, RiFeedbackLine } from 'react-icons/ri';
import { FiSettings, FiHelpCircle } from 'react-icons/fi';
export const categories = [
	{ name: 'New', icon: <AiFillHome />, type: 'home' },
	{ name: 'Trending', icon: <MdLocalFireDepartment />, type: 'category' },
	{ name: 'Music', icon: <CgMusicNote />, type: 'category' },
	{ name: 'Films', icon: <FiFilm />, type: 'category' },
	{ name: 'Live', icon: <MdLiveTv />, type: 'category' },
	{ name: 'Gaming', icon: <IoGameControllerSharp />, type: 'category' },
	{ name: 'News', icon: <ImNewspaper />, type: 'category' },
	{ name: 'Sports', icon: <GiDiamondTrophy />, type: 'category' },
	{ name: 'Learning', icon: <RiLightbulbLine />, type: 'category' },
	{
		name: 'Fashion & beauty',
		icon: <GiEclipse />,
		type: 'category',
		divider: true,
	},
	{ name: 'Settings', icon: <FiSettings />, type: 'menu' },
	{ name: 'Report History', icon: <AiOutlineFlag />, type: 'menu' },
	{ name: 'Help', icon: <FiHelpCircle />, type: 'menu' },
	{ name: 'Send feedback', icon: <RiFeedbackLine />, type: 'menu' },
];

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';
export const demoThumbnailUrl =
	'https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'Youtube Video';
export const demoVideoTitle = 'lorem ipsum lorem ipsum';
export const demoProfilePicture =
	'http://dergipark.org.tr/assets/app/images/buddy_sample.png';
