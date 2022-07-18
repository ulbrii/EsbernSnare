import esbernsnarelogo from '../../images/esbernsnare-logo-sm.png';

import ModalConstruct from './ModalConstruct';
import About from '../pages/About';
import Photos from '../pages/Photos';
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
			<Container variant="fluid">
				<Navbar variant="dark p-md-3" expand="lg" fixed="bottom">
					<Navbar.Brand variant="img-fluid d-none d-lg-block">
						<img className="img-fluid" src={esbernsnarelogo} alt="esbernsnare-logo" href="/" />
					</Navbar.Brand>

					<Navbar.Toggle
						className="mt-4 mb-5 m-auto ms-lg-auto"
						data-bs-toggle="collapse"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle Navbar"
					/>
					<Navbar.Collapse className="text-center" id="navbarNav">
						<Nav className="text-center ms-auto">
							<Nav.Link href="/" className="link">
								Home
							</Nav.Link>
							<Nav.Link name="about" onClick={handleShowAbout} className="link">
								About
							</Nav.Link>
							<Nav.Link name="photos" onClick={handleShowPhotos} className="link">
								Photos
							</Nav.Link>
							<Nav.Link name="discog" onClick={handleShowDiscog} className="link">
								Discography
							</Nav.Link>
							<Nav.Link name="contact" onClick={handleShowContact} className="link">
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				{/* ---------- About Page ---------- */}
				<ModalConstruct id="aboutModal" show={showAbout} close={handleCloseAbout} title="Who We Are">
					<About />
				</ModalConstruct>

				{/* ---------- Photos Page ---------- */}
				<ModalConstruct id="photosModal" show={showPhotos} close={handleClosePhotos} title="Photos">
					<Photos />
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
