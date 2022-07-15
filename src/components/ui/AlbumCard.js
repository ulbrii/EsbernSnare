import { Button, Row } from 'react-bootstrap';
import { useState } from 'react';

import AlbumOpenOffcanvas from './AlbumOpenOffcanvas';

function AlbumCard(props) {
	const [ showLyricsCard, setShowLyricsCard ] = useState(false);
	function toggleShowLyricsCard() {
		showLyricsCard ? setShowLyricsCard(false) : setShowLyricsCard(true);
	}

	function handleCloseLyricsCard() {
		setShowLyricsCard(false);
	}

	return (
		<Row>
			{/* Album Cover */}
			<div className="col-lg-5 col-md-12">
				<img className="img-fluid mx-auto" src={props.image} alt="aviolentpeace" />
			</div>

			{/* Album Info */}
			<div className="col-lg-5 col-md-12 position-relative">
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
			</div>
			<hr />
			<AlbumOpenOffcanvas
				lyricsId={props.lyricsId}
				title={props.title}
				image={props.image}
				lyrics={props.lyrics}
				description={props.description}
				src={props.playSrc}
				show={showLyricsCard}
				close={handleCloseLyricsCard}
			/>
		</Row>
	);
}

export default AlbumCard;
