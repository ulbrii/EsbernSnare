import band5 from '../../images/band5.jpg';
import band6 from '../../images/band6.jpg';
import band7 from '../../images/band7.jpg';
import band8 from '../../images/band9.jpg';
import band10 from '../../images/band10.jpg';
import band11 from '../../images/band11-modified.jpeg';
import band12 from '../../images/band12.jpg';
import band13 from '../../images/band13.jpg';
import band14 from '../../images/band14.jpg';

import { Carousel } from 'react-bootstrap';

function Photos() {
	return (
		<section className="photos-section">
			<Carousel id="photosCarousel" className="justify-content-center" fade>
				<Carousel.Item className="active" interval="4000">
					<img src={band5} className="d-block w-100" alt="..." />
					<Carousel.Caption className="d-none d-md-block">
						<h5>Lava MiniFest Apr 2nd, 2022</h5>
						<p>
							<i className="fa-solid fa-camera-retro" />: Stephen Miles @scribblecinema
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval="4000">
					<img src={band6} className="d-block w-100" alt="..." />
					<Carousel.Caption className="d-none d-md-block">
						<h5>Lava MiniFest Apr 2nd, 2022</h5>
						<p>
							<i className="fa-solid fa-camera-retro" />: Stephen Miles @scribblecinema
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval="4000">
					<img src={band7} className="d-block w-100" alt="..." />
					<Carousel.Caption className="d-none d-md-block">
						<h5>Lava MiniFest Apr 2nd, 2022</h5>
						<p>
							<i className="fa-solid fa-camera-retro" />: Stephen Miles @scribblecinema
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval="4000">
					<img src={band8} className="d-block w-100" alt="..." />
					<Carousel.Caption className="d-none d-md-block">
						<h5>Lava MiniFest Apr 2nd, 2022</h5>
						<p>
							<i class="fa-solid fa-camera-retro" />: Stephen Miles @scribblecinema
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval="4000">
					<img src="" className="d-block w-100" alt="..." />
					<Carousel.Caption className="d-none d-md-block">
						<h5>Lava MiniFest Apr 2nd, 2022</h5>
						<p>
							<i className="fa-solid fa-camera-retro" />: Stephen Miles @scribblecinema
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval="4000">
					<img src={band10} className="d-block w-100" alt="..." />
					<Carousel.Caption className="d-none d-md-block">
						<h5>Lava MiniFest Apr 2nd, 2022</h5>
						<p>
							<i className="fa-solid fa-camera-retro" />: Stephen Miles @scribblecinema
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval="4000">
					<img src={band11} className="d-block w-100" alt="..." />
					<Carousel.Caption className="d-none d-md-block">
						<h5>Lava MiniFest Apr 2nd, 2022</h5>
						<p>
							<i className="fa-solid fa-camera-retro" />: Stephen Miles @scribblecinema
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval="4000">
					<img src={band12} className="d-block w-100" alt="..." />
					<Carousel.Caption className="d-none d-md-block">
						<h5>Lava MiniFest Apr 2nd, 2022</h5>
						<p>
							<i className="fa-solid fa-camera-retro" />: Stephen Miles @scribblecinema
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval="4000">
					<img src={band13} className="d-block w-100" alt="..." />
					<Carousel.Caption className="d-none d-md-block">
						<h5>Lava MiniFest Apr 2nd, 2022</h5>
						<p>
							<i className="fa-solid fa-camera-retro" />: Stephen Miles @scribblecinema
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval="4000">
					<img src={band14} className="d-block w-100" alt="..." />
					<Carousel.Caption className="d-none d-md-block">
						<h5>Lava MiniFest Apr 2nd, 2022</h5>
						<p>
							<i className="fa-solid fa-camera-retro" />: Stephen Miles @scribblecinema
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</section>
	);
}

export default Photos;
