import { Button, Col, Row } from 'react-bootstrap';
import { useState } from 'react';

import AlbumOpenOffcanvas from './AlbumOpenOffcanvas';

// This component is nested within + obtaining props from the Discog component.
function AlbumCard(props) {
	const [ showLyricsCard, setShowLyricsCard ] = useState(false);
	function toggleShowLyricsCard() {
		showLyricsCard ? setShowLyricsCard(false) : setShowLyricsCard(true);
	}

	function handleCloseLyricsCard() {
		setShowLyricsCard(false);
	}

	return (
		<Row className="album-row">
			{/* Album Cover */}
			<Col lg={5} md={12}>
				<img className="img-fluid mx-auto" src={props.image} alt="aviolentpeace" />
			</Col>

			{/* Album Info */}
			<Col className="position-relative" lg={5} md={12}>
				<h3>{props.title}</h3>
				<h6>{props.release}</h6>

				{/* Buttons */}
				<a href={props.playLink} target="_blank" rel="noreferrer noopener">
					<Button className="album-button" variant="outline-light" aria-controls="albumPlay">
						<i className="fa-solid fa-music" /> play
					</Button>
				</a>
				<Button
					className="album-button"
					variant="outline-light"
					aria-controls="albumLyrics"
					onClick={toggleShowLyricsCard}
				>
					<i className="fa-solid fa-book-open" /> open
				</Button>

				<hr />

				{/* Description */}
				<p>{props.description}</p>

				{/* Credits */}
				<section>{props.credits}</section>
			</Col>
			<AlbumOpenOffcanvas
				lyricsId={props.lyricsId}
				title={props.title}
				image={props.image}
				lyrics={props.lyrics}
				release={props.release}
				description={props.description}
				credits={props.credits}
				src={props.playSrc}
				show={showLyricsCard}
				close={handleCloseLyricsCard}
			/>
		</Row>
	);
}

export default AlbumCard;
