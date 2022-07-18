import { Container } from 'react-bootstrap';

// Image imports
import aViolentPeace from '../../images/aviolentpeace.jpg';
import joysOfKin from '../../images/joysofkin.jpg';
import doesItFeel from '../../images/doesitfeel.png';

import AlbumCard from '../ui/AlbumCard';
import AViolentPeaceLyrics from '../lyrics/AViolentPeaceLyrics';
import JoysOfKinEpLyrics from '../lyrics/JoysOfKinEpLyrics';
import DoesItFeelLyrics from '../lyrics/DoesItFeelLyrics';

// Component containing all necessary album information for each respective album.  When adding or changing info regarding an album,
// this component should be the sole source of those changes.
function Discog() {
	return (
		<Container fluid>
			{/* ********** A Violent Peace ********** */}
			<AlbumCard
				title="A Violent Peace"
				image={aViolentPeace}
				playLink="https://open.spotify.com/album/6h1rYOTuNFu5drIgFF9kcW"
				playSrc="https://open.spotify.com/embed/album/6h1rYOTuNFu5drIgFF9kcW?utm_source=generator&theme=0"
				lyricsId="aViolentPeaceLyrics"
				lyrics={<AViolentPeaceLyrics />}
				release="released March 28th, 2014"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis sem sapien, non posuere nibh
					hendrerit nec. Donec ex mauris, bibendum eu tortor a, ornare egestas nibh. Nunc dignissim lobortis
					nunc, vitae hendrerit arcu venenatis non. Integer ut sagittis purus. Aliquam aliquam tortor diam.
					Nulla facilisi. Donec cursus hendrerit interdum. Praesent iaculis imperdiet ante, at sollicitudin ex
					scelerisque ut. Maecenas volutpat placerat semper. Fusce a ligula pretium, faucibus ligula vitae,
					malesuada eros. Maecenas lacinia vel purus ut pellentesque. Orci varius natoque penatibus et magnis
					dis parturient montes, nascetur ridiculus mus. Mauris aliquam accumsan augue, ac iaculis turpis
					efficitur quis. Vivamus feugiat, justo vel volutpat maximus, augue libero pellentesque sapien, vel
					mollis dolor elit eu nibh. Proin consequat consectetur eros ut molestie. Cras eu elit velit. Integer
					euismod posuere orci, non efficitur nibh efficitur eu. Fusce et tortor neque. Sed blandit ultricies
					fringilla."
				credits={
					<div>
						<p className="modal-subtext">All songs written, arranged, and performed by Esbern Snare</p>
						<p className="modal-subtext">Produced by Jonathan Anderson and Esbern Snare</p>
						<p className="modal-subtext">Recorded and Mixed by Jonathan Anderson at Whalehead Records</p>
						<p className="modal-subtext">Mastered by Adam Boose at Cauliflower Audio</p>
						<p className="modal-subtext">Artwork by Jonathan Aumen</p>
						<p className="modal-subtext">Design by Jonathan Hildebrand and Esbern Snare</p>
						<p className="modal-subtext">Photography by Ashley Fielden</p>
						<p className="modal-subtext">Esbern Snare typography by Alec Mangum</p>
					</div>
				}
			/>

			{/* ********** Joys of Kin EP ********** */}
			<AlbumCard
				title="Joys of Kin | EP"
				image={joysOfKin}
				playLink="https://esbernsnare.bandcamp.com/album/joys-of-kin-ep"
				playSrc="https://bandcamp.com/EmbeddedPlayer/album=1207544751/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/"
				lyricsId="joysOfKinEpLyrics"
				lyrics={<JoysOfKinEpLyrics />}
				release="released April 25, 2016"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis sem sapien, non posuere nibh
					hendrerit nec. Donec ex mauris, bibendum eu tortor a, ornare egestas nibh. Nunc dignissim lobortis
					nunc, vitae hendrerit arcu venenatis non. Integer ut sagittis purus. Aliquam aliquam tortor diam.
					Nulla facilisi. Donec cursus hendrerit interdum. Praesent iaculis imperdiet ante, at sollicitudin ex
					scelerisque ut. Maecenas volutpat placerat semper. Fusce a ligula pretium, faucibus ligula vitae,
					malesuada eros. Maecenas lacinia vel purus ut pellentesque. Orci varius natoque penatibus et magnis
					dis parturient montes, nascetur ridiculus mus. Mauris aliquam accumsan augue, ac iaculis turpis
					efficitur quis. Vivamus feugiat, justo vel volutpat maximus, augue libero pellentesque sapien, vel
					mollis dolor elit eu nibh. Proin consequat consectetur eros ut molestie. Cras eu elit velit. Integer
					euismod posuere orci, non efficitur nibh efficitur eu. Fusce et tortor neque. Sed blandit ultricies
					fringilla."
				credits={
					<div>
						<p class="modal-subtext">Artwork design by Alec Mangum</p>
						<p class="modal-subtext">Recordings captured live by Jake Hull</p>
						<p class="modal-subtext">Mixing and mastering by Jake Hull</p>
						<p class="modal-subtext">All original songs by Esbern Snare</p>
					</div>
				}
			/>

			{/* ********** does it feel like i'm not there? ********** */}
			<AlbumCard
				title="does it feel like i'm not there?"
				image={doesItFeel}
				playSrc=""
				lyricsId="doesItFeelLyrics"
				lyrics={<DoesItFeelLyrics />}
				release="arriving Fall 2022"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis sem sapien, non posuere nibh
					hendrerit nec. Donec ex mauris, bibendum eu tortor a, ornare egestas nibh. Nunc dignissim lobortis
					nunc, vitae hendrerit arcu venenatis non. Integer ut sagittis purus. Aliquam aliquam tortor diam.
					Nulla facilisi. Donec cursus hendrerit interdum. Praesent iaculis imperdiet ante, at sollicitudin ex
					scelerisque ut. Maecenas volutpat placerat semper. Fusce a ligula pretium, faucibus ligula vitae,
					malesuada eros. Maecenas lacinia vel purus ut pellentesque. Orci varius natoque penatibus et magnis
					dis parturient montes, nascetur ridiculus mus. Mauris aliquam accumsan augue, ac iaculis turpis
					efficitur quis. Vivamus feugiat, justo vel volutpat maximus, augue libero pellentesque sapien, vel
					mollis dolor elit eu nibh. Proin consequat consectetur eros ut molestie. Cras eu elit velit. Integer
					euismod posuere orci, non efficitur nibh efficitur eu. Fusce et tortor neque. Sed blandit ultricies
					fringilla."
				credits={
					<div>
						<p class="modal-subtext">All songs written, arranged, and performed by Esbern Snare</p>
						<p class="modal-subtext">Artwork design by Luke Jones</p>
						<p class="modal-subtext">Recorded by Micah Lindstrom at Morgan Horse Studios</p>
						<p class="modal-subtext">
							Mixed by Ben Mekkes at{' '}
							<a target="_blank" href="http://www.ownitmusic.productions/" rel="noreferrer noopener">
								OWNIT Music
							</a>
						</p>
						<p class="modal-subtext">Mastered by Adam Boose at Cauliflower Audio</p>
						<p class="modal-subtext">Guest vocals by Rebecca Crumrine</p>
						<p class="modal-subtext">String arrangements and performances by Amos Housworth</p>
					</div>
				}
			/>
		</Container>
	);
}

export default Discog;
