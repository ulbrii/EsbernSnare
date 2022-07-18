import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Row, Col, Form, Button } from 'react-bootstrap';
import EmailSuccess from '../ui/EmailSuccess';

function Contact() {
	const form = useRef();

	const [ show, setShow ] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_lieg4r8', 'template_hoa6vne', form.current, 'ev-hjbO5H0kFHXrMJ').then(
			(result) => {
				console.log(result.text);
				console.log('Message Sent!');
				e.target.reset();
				setShow(true);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<section className="mb-4">
			{/* Section heading */}
			<h2 className="h1-responsive font-weight-bold text-center my-4">Send Us a Message</h2>
			{/* Section description */}
			<p className="text-center w-responsive mx-auto mb-5">
				We'd love to hear from you! Feel free to reach out to us anytime.
			</p>

			<Row className="justify-content-center">
				<Col className="mb-md-0 mb-5" md={9}>
					{/* Contact Form */}
					<Form ref={form} name="contact-form" onSubmit={sendEmail}>
						<Row>
							{/* Name */}
							<Col md={6}>
								<div className="md-form mb-0">
									<input type="text" name="user_name" className="form-control" />
									<label for="name" className="">
										Your name
									</label>
								</div>
							</Col>

							{/* Email */}
							<Col md={6}>
								<div className="md-form mb-0">
									<input type="text" name="user_email" className="form-control" />
									<label for="email" className="">
										Your email
									</label>
								</div>
							</Col>
						</Row>

						{/* Subject */}
						<Row>
							<Col md={12}>
								<div className="md-form mb-0">
									<input type="text" name="user_subject" className="form-control" />
									<label for="subject" className="">
										Subject
									</label>
								</div>
							</Col>
						</Row>

						{/* Message */}
						<Row>
							<Col md={12}>
								<div className="md-form">
									<textarea
										type="text"
										name="user_message"
										rows="5"
										className="form-control md-textarea"
									/>
									<label for="user_message">Your message</label>
								</div>
							</Col>
						</Row>

						{/* Send */}
						<div className="text-center text-md-left">
							<Button variant="outline-light" type="submit" value="Send">
								Send Message
							</Button>
						</div>
						<div className="status" />
					</Form>
				</Col>
			</Row>
			{/* Email success toast message */}
			<EmailSuccess onClose={() => setShow(false)} show={show} />
		</section>
	);
}

export default Contact;
