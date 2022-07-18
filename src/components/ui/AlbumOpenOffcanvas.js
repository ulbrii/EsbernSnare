import { Offcanvas, Row, Button, CloseButton, Col, Card } from 'react-bootstrap';
import AlbumMedia from './AlbumMedia';

function AlbumOpenOffcanvas(props) {
	return (
		<Offcanvas
			placement="bottom"
			tabindex="-1"
			id={props.lyricsId}
			aria-labelledby="albumLyrics"
			show={props.show}
			src={props.src}
		>
			<Offcanvas.Header>
				<CloseButton variant="white" size="xl" onClick={props.close} />
				<h3>{props.title}</h3>
			</Offcanvas.Header>

			<Offcanvas.Body>
				<Row className="justify-content-center">
					<img src={props.image} className="offcanvas-album-image" alt="aViolentPeaceImage" />
					<p className="offcanvas-album-release-date text-center">{props.release}</p>
				</Row>
				<Row className="justify-content-center">
					<Col align="center" xl={5} lg={12}>
						<h3 className="offcanvas-h3" align="center">
							Play
						</h3>
						<AlbumMedia src={props.src} />
						<h3 className="offcanvas-h3" align="center">
							Info
						</h3>
						<Card>
							<p align="left">{props.description}</p>
						</Card>
					</Col>
					{/* Insert lyrics component */}
					<Col xl={6} lg={12}>
						<h3 className="offcanvas-h3" align="center">
							Lyrics
						</h3>
						{props.lyrics}
					</Col>
					{/* Insert lyrics component */}
				</Row>
			</Offcanvas.Body>
			<Button onClick={props.close} className="offcanvas-close-btn" variant="dark" size="lg" aria-label="close">
				Back to Discography
			</Button>
		</Offcanvas>
	);
}

export default AlbumOpenOffcanvas;
