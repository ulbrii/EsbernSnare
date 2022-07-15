import { Card } from 'react-bootstrap';

function AlbumMedia(props) {
	return (
		<Card aria-labelledby="albumPlay" placement="end">
			<iframe
				title="album"
				style={{ borderRadius: 12 }}
				src={props.src}
				width="100%"
				height="380"
				frameBorder="0"
				allowfullscreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			/>
		</Card>
	);
}

export default AlbumMedia;
