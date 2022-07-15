import Navigation from './components/Navigation'

function App() {

	return (
    <>
		<div className="App">
			<section className="homepage">
				{/* Top Section */}

				<section className="top-section row" />

				{/* Title Section */}

				<section className="title-section row">
					<div className="title-box container">
						<a href="/">
							<h1 className="title">Esbern Snare</h1>
						</a>
						<h4 className="sub-title">new album coming soon...</h4>
					</div>
				</section>

				{/* Footer Section */}

				<section className="social-section row d-none d-lg-block">
					<div className="social-box container">
						<a href="https://www.instagram.com/esbernsnare" target="_blank" rel="noreferrer noopener">
							<i className="fa-brands fa-instagram fa-2xl" />
						</a>
						<a href="https://www.facebook.com/esbernsnaremusic" target="_blank" rel="noreferrer noopener">
							<i className="fa-brands fa-facebook fa-2xl" />
						</a>
						<a href="mailto:esbernsnareband@gmail.com">
							<i className="fa-solid fa-envelope fa-2xl" />
						</a>
						<a href="https://esbernsnare.bandcamp.com/" target="_blank" rel="noreferrer noopener">
							<i className="fa-brands fa-bandcamp fa-2xl" />
						</a>
						<a href="https://open.spotify.com/artist/1VbRx9HJz7ZVbkp6TVy3eq" target="_blank" rel="noreferrer noopener">
							<i className="fa-brands fa-spotify fa-2xl" />
						</a>
						<p className="snippet d-none d-md-block">of Norfolk, VA</p>
					</div>
				</section>
			</section>
		</div>

<Navigation />
</>
	);
}

export default App;
