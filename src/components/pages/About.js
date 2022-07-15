// ********** Band member images **********
import lukejones from '../../images/lukejones-rounded.png';
import lukejones2 from '../../images/lukejones-action-rounded.png';
import adamjones from '../../images/adamjones-rounded.png';
import adamjones2 from '../../images/adamjones-action-rounded.png';
import josephbrockman from '../../images/josephbrockman-rounded.png';
import josephbrockman2 from '../../images/josephbrockman-action-rounded.png';
import josiahcrumrine from '../../images/josiahcrumrine-rounded.png';
import josiahcrumrine2 from '../../images/josiahcrumrine-action-rounded.png';
import ericdryfka from '../../images/ericdryfka-rounded.png';
import ericdryfka2 from '../../images/ericdryfka-action-rounded.png';
// ********** Band member images **********

import { Container, Row } from 'react-bootstrap';

function About() {
	return (
		<Container id="about" variant="fluid">
			{/* Row 1 */}
			<Row className="justify-content-center">
				{/* Col Header */}
				<div className="about-header col-12 text-center">
					<h2>Members</h2>
				</div>

				{/* Col 1 */}
				<div className="col-lg-2 col-md-4 col-sm-12 text-center">
					<img
						id="ljon"
						className="img-fluid"
						src={lukejones}
						alt="lukejones"
						onMouseOver={(e) => (e.currentTarget.src = lukejones2)}
						onMouseOut={(e) => (e.currentTarget.src = lukejones)}
					/>
					<h3>Luke Jones</h3>
					<p>vocals, keys</p>
				</div>

				{/* Col 2 */}
				<div className="col-lg-2 col-md-4 col-sm-12 text-center">
					<img
						id="ajon"
						className="img-fluid"
						src={adamjones}
						alt="adamjones"
						onMouseOver={(e) => (e.currentTarget.src = adamjones2)}
						onMouseOut={(e) => (e.currentTarget.src = adamjones)}
					/>
					<h3>Adam Jones</h3>
					<p>keys, synths</p>
				</div>

				{/* Col 3 */}
				<div className="col-lg-2 col-md-4 col-sm-12 text-center">
					<img
						id="jbrock"
						className="img-fluid"
						src={josephbrockman}
						alt="josephbrockman"
						onMouseOver={(e) => (e.currentTarget.src = josephbrockman2)}
						onMouseOut={(e) => (e.currentTarget.src = josephbrockman)}
					/>
					<h3>Joseph Brockman</h3>
					<p>guitar</p>
				</div>

				{/* Col 4 */}
				<div className="col-lg-2 col-md-4 col-sm-12 text-center">
					<img
						id="jcrum"
						className="img-fluid"
						src={josiahcrumrine}
						alt="josiahcrumrine"
						onMouseOver={(e) => (e.currentTarget.src = josiahcrumrine2)}
						onMouseOut={(e) => (e.currentTarget.src = josiahcrumrine)}
					/>
					<h3>Josiah Crumrine</h3>
					<p>bass, backing vocals</p>
				</div>

				{/* Col 5 */}
				<div className="col-lg-2 col-md-4 col-sm-12 text-center">
					<img
						id="edryf"
						className="img-fluid"
						src={ericdryfka}
						alt="ericdryfka"
						onMouseOver={(e) => (e.currentTarget.src = ericdryfka2)}
						onMouseOut={(e) => (e.currentTarget.src = ericdryfka)}
					/>
					<h3>Eric Dryfka</h3>
					<p>drums</p>
				</div>
			</Row>

			{/* Row 2 */}

			<Row className="justify-content-center">
				{/* ********** Biography Header ********** */}
				<div className="about-header col-12 text-center">
					<h2>Bio</h2>
					<hr />
				</div>

				{/* ********** Biography ********** */}
				<div className="col-lg-10 col-md-6 col-sm-12 text-center">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis sem sapien, non posuere nibh
						hendrerit nec. Donec ex mauris, bibendum eu tortor a, ornare egestas nibh. Nunc dignissim
						lobortis nunc, vitae hendrerit arcu venenatis non. Integer ut sagittis purus. Aliquam aliquam
						tortor diam. Nulla facilisi. Donec cursus hendrerit interdum. Praesent iaculis imperdiet ante,
						at sollicitudin ex scelerisque ut. Maecenas volutpat placerat semper. Fusce a ligula pretium,
						faucibus ligula vitae, malesuada eros. Maecenas lacinia vel purus ut pellentesque. Orci varius
						natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquam
						accumsan augue, ac iaculis turpis efficitur quis. Vivamus feugiat, justo vel volutpat maximus,
						augue libero pellentesque sapien, vel mollis dolor elit eu nibh. Proin consequat consectetur
						eros ut molestie. Cras eu elit velit. Integer euismod posuere orci, non efficitur nibh efficitur
						eu. Fusce et tortor neque. Sed blandit ultricies fringilla. Ut rutrum nunc sit amet metus
						pharetra, nec malesuada enim volutpat. Aenean tortor velit, euismod eget nisl non, consectetur
						pellentesque est. Vivamus eget dolor leo. Cras volutpat velit quam, non dapibus sapien bibendum
						non. Etiam sagittis sollicitudin lacus, eu rhoncus lectus suscipit ac. Ut quis tempor leo. Fusce
						gravida sed urna id dictum. Proin tincidunt dapibus risus quis bibendum. Quisque interdum ipsum
						justo, vel elementum ante sodales sit amet. Ut eu lobortis dui. Curabitur nec aliquam leo. Sed
						non mauris mi. In quis molestie velit, et pulvinar nunc. Mauris ullamcorper orci leo, sit amet
						dapibus ligula feugiat non.
					</p>
					<br />
					<p>
						Mauris nec velit dignissim, fringilla dui vel, viverra tellus. Integer dignissim in ipsum vitae
						vehicula. Aliquam neque leo, convallis ut blandit nec, rutrum placerat augue. Donec rutrum quam
						mi. Sed id ex ligula. Vestibulum ante sapien, cursus ac dictum semper, rhoncus nec nisi. Duis
						vel consectetur lorem. Suspendisse maximus volutpat dolor, nec maximus libero tempor sit amet.
						In sed enim nisl. Pellentesque placerat neque sem, hendrerit hendrerit mauris sagittis quis.
						Phasellus euismod nunc ac tortor malesuada, vel placerat risus maximus. Integer et volutpat
						libero. Maecenas ligula lacus, tristique sed pretium sed, egestas sed nisl. Praesent semper
						aliquam nisl eget convallis. Mauris quis commodo nisl. Vivamus finibus consectetur nulla, eget
						elementum mauris dapibus vitae. Pellentesque elementum aliquam malesuada. Etiam pretium, massa
						at finibus ornare, ante nisi consequat justo, vel suscipit lorem dolor non odio. Morbi varius
						dolor nulla, a viverra elit elementum et. Aliquam ullamcorper volutpat sem, nec varius mi dictum
						quis. In bibendum dignissim purus, quis euismod lacus viverra vel. Duis euismod magna sem, vel
						sagittis ligula ultrices at. Quisque rhoncus mi at metus viverra suscipit sit amet et lacus.
						Pellentesque sodales ex ac diam iaculis euismod. Donec iaculis purus sit amet nisl rutrum
						finibus sit amet nec ligula. Cras eu dui tellus. Praesent mollis ex accumsan, suscipit arcu sed,
						hendrerit purus. Sed sed condimentum nulla. Vestibulum efficitur molestie libero, eget congue
						mauris fringilla sit amet. Nunc pretium consequat turpis, at laoreet felis tristique in. Aenean
						ut fringilla odio, sed consectetur turpis. Vivamus vitae feugiat tortor. Etiam neque lectus,
						lacinia vel neque non, rhoncus malesuada nisi. Pellentesque porta lobortis ipsum.
					</p>
				</div>
			</Row>
		</Container>
	);
}

export default About;
