import esbernsnarelogo from '../../images/esbernsnare-logo-sm.png';

import ModalConstruct from './ModalConstruct';
import About from '../pages/About';
import Media from '../pages/Media';
import Discog from '../pages/Discog';
import Contact from '../pages/Contact';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';

// Exported to Homepage component
function Navigation() {
	// About - {state and handling}
	const [ showAbout, setShowAbout ] = useState(false);
	const handleShowAbout = () => setShowAbout(true);
	const handleCloseAbout = () => setShowAbout(false);

	// Photos - {state and handling}
	const [ showPhotos, setShowPhotos ] = useState(false);
	const handleShowPhotos = () => setShowPhotos(true);
	const handleClosePhotos = () => setShowPhotos(false);

	// Discography - {state and handling}
	const [ showDiscog, setShowDiscog ] = useState(false);
	const handleShowDiscog = () => setShowDiscog(true);
	const handleCloseDiscog = () => setShowDiscog(false);

	// Contact - {state and handling}
	const [ showContact, setShowContact ] = useState(false);
	const handleShowContact = () => setShowContact(true);
	const handleCloseContact = () => setShowContact(false);

	return (
		<section className="navbar-section">
			<Container fluid>
				<Navbar variant="dark p-md-3" expand="lg" fixed="bottom">
					<Navbar.Brand className="d-none d-lg-block">
						<img
							className="img-fluid"
							src={esbernsnarelogo}
							alt="esbernsnare-logo"
							href="/EsbernSnare"
						/>
					</Navbar.Brand>
						<Nav className="text-center mx-auto">
							<Nav.Link href="/Home" className="link">
								Home
							</Nav.Link>
							<Nav.Link name="about" onClick={handleShowAbout} className="link mb-2">
								About
							</Nav.Link>
							<Nav.Link name="media" onClick={handleShowPhotos} className="link mb-2">
								Media
							</Nav.Link>
							<Nav.Link name="discog" onClick={handleShowDiscog} className="link mb-2">
								Discography
							</Nav.Link>
							<Nav.Link name="contact" onClick={handleShowContact} className="link mb-2">
								Contact
							</Nav.Link>
						</Nav>
				</Navbar>

				{/* ---------- About Page ---------- */}
				<ModalConstruct id="aboutModal" show={showAbout} close={handleCloseAbout} title="The Band">
					<About />
				</ModalConstruct>

				{/* ---------- Photos Page ---------- */}
				<ModalConstruct id="mediaModal" show={showPhotos} close={handleClosePhotos} title="Media">
					<Media />
				</ModalConstruct>

				{/* ---------- Discography Page ---------- */}
				<ModalConstruct id="discogModal" show={showDiscog} close={handleCloseDiscog} title="Discography">
					<Discog />
				</ModalConstruct>

				{/* ---------- Contact Page ---------- */}
				<ModalConstruct id="contactModal" show={showContact} close={handleCloseContact} title="Contact Us">
					<Contact />
				</ModalConstruct>
			</Container>
		</section>
	);
}

export default Navigation;
