import { Row, Col, Toast } from 'react-bootstrap';
import ToastContainer from 'react-bootstrap/ToastContainer';

// Exported to Contact modal component
function EmailSuccess(props) {
	return (
		<Row>
			<Col xs={6}>
				<ToastContainer position="middle-center">
					<Toast onClose={props.onClose} show={props.show} delay={4000} autohide>
						<Toast.Header closeButton={false}>
							<strong className="me-auto">Esbern Snare</strong>
							<small>Just now</small>
						</Toast.Header>
						<Toast.Body>Email sent! We'll get back to you soon :)</Toast.Body>
					</Toast>
				</ToastContainer>
			</Col>
		</Row>
	);
}

export default EmailSuccess;
