import { Container, Row } from 'react-bootstrap';

// Exported to Homepage component
function HomeTitle() {
	return (
		<Row className="title-section">
			<Container className="title-box">
				<a href="/">
					<h1 className="title">Esbern Snare</h1>
				</a>
				<h4 className="sub-title">new album coming soon...</h4>
			</Container>
		</Row>
	);
}

export default HomeTitle;
