import { Button, CloseButton } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

function ModalConstruct(props) {
	return (
		<Modal show={props.show} class="fade scrollable modal-content" fullscreen centered>
			<Modal.Header className="modal-header">
				<CloseButton variant="white" size="xl" onClick={props.close} />
				<Modal.Title className="modal-title text-center">
					<h1>{props.title}</h1>
				</Modal.Title>
			</Modal.Header>

			<Modal.Body className="modal-body">{props.children}</Modal.Body>

			<Modal.Footer>
				<div className="justify-content-center modal-social me-auto">
					<a href="https://www.instagram.com/esbernsnare" target="_blank" rel="noreferrer noopener">
						<i className="fa-brands fa-instagram fa-xl" />
					</a>
					<a href="https://www.facebook.com/esbernsnaremusic" target="_blank" rel="noreferrer noopener">
						<i className="fa-brands fa-facebook fa-xl" />
					</a>
					<a href="mailto:esbernsnareband@gmail.com">
						<i className="fa-solid fa-envelope fa-xl" />
					</a>
					<a href="https://esbernsnare.bandcamp.com/" target="_blank" rel="noreferrer noopener">
						<i className="fa-brands fa-bandcamp fa-xl" />
					</a>
					<a
						href="https://open.spotify.com/artist/1VbRx9HJz7ZVbkp6TVy3eq"
						target="_blank"
						rel="noreferrer noopener"
					>
						<i className="fa-brands fa-spotify fa-xl" />
					</a>
				</div>
				<Button onClick={props.close} variant="outline-light" size="lg" aria-label="close">
					Back to Home
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ModalConstruct;
