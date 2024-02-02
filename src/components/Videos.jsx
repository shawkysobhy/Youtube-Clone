/* eslint-disable react/prop-types */
import { Box, Stack } from '@mui/material';
import { VideoCard, ChannelCard, PlaylistCard } from './';
function Videos({ videos }) {
	return (
		<Box>
			<Stack
				sx={{ paddingInline: '8px' }}
				direction={'row'}
				alignItems={'center'}
				flexWrap={'wrap'}
				gap={2}>
				{videos?.map((item, i) => {
					{
						if (!item.id.videoId && !item.id.channelId) {
							console.log(item);
						}
					}
					return (
						<Box
							key={i}
							sx={{
								flex: {
									xs: '100%',
									xsm: '48%',
									sm: '30.33%',
									lg: '24%',
								},
							}}>
							{item.id.videoId && <VideoCard video={item} />}
							{item.id.channelId && <ChannelCard channel={item} />}
							{item.id.playlistId && <PlaylistCard playlist={item} />}
						</Box>
					);
				})}
			</Stack>
		</Box>
	);
}

export default Videos;
