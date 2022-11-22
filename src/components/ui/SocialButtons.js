import { Container, Row } from "react-bootstrap";

// Exported to Homepage component
function SocialButtons() {
  return (
    <Row className="social-section d-none d-lg-block">
      <Container className="social-box">
        <a
          href="https://www.instagram.com/esbernsnare"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fa-brands fa-instagram fa-2xl" />
        </a>
        <a
          href="https://www.facebook.com/esbernsnaremusic"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fa-brands fa-facebook fa-2xl" />
        </a>
        <a href="mailto:esbernsnareband@gmail.com">
          <i className="fa-solid fa-envelope fa-2xl" />
        </a>
        <a
          href="https://esbernsnare.bandcamp.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fa-brands fa-bandcamp fa-2xl" />
        </a>
        <a
          href="https://open.spotify.com/artist/1VbRx9HJz7ZVbkp6TVy3eq"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fa-brands fa-spotify fa-2xl" />
        </a>
        <p className="snippet d-none d-md-block">of Norfolk, VA</p>
      </Container>
    </Row>
  );
}

export default SocialButtons;
