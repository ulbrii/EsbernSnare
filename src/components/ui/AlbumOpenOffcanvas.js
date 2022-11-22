import {
  Offcanvas,
  Row,
  Button,
  CloseButton,
  Col,
  Card,
} from "react-bootstrap";
import AlbumMedia from "./AlbumMedia";

// Offcanvas component to be opened with the 'open' button click associated with each respective album.
// This component is nested within + obtaining props from the AlbumCard component.
function AlbumOpenOffcanvas(props) {
  return (
    <Offcanvas
      placement="bottom"
      tabindex="-1"
      id={props.lyricsId}
      aria-labelledby="albumLyrics"
      show={props.show}
      src={props.src}
    >
      {/* ********** Title ********** */}
      <Offcanvas.Header>
        <CloseButton variant="white" size="xl" onClick={props.close} />
        <h3>{props.title}</h3>
      </Offcanvas.Header>
      {/* ********** Image ********** */}
      <Offcanvas.Body>
        <Row className="justify-content-center">
          <img
            src={props.image}
            className="offcanvas-album-image"
            alt="aViolentPeaceImage"
          />
          <p className="offcanvas-album-release-date text-center">
            {props.release}
          </p>
        </Row>
        <Row className="justify-content-center">
          <Col align="center" lg={6}>
            {/* ********** Media ********** */}
            <h3 className="offcanvas-h3" align="center">
              Play
            </h3>
            <AlbumMedia src={props.src} />
          </Col>

          <Col align="center" lg={6}>
            {/* ********** Bio ********** */}
            <h3 className="offcanvas-h3" align="center">
              Info
            </h3>
            <Card>
              <p align="left">{props.description}</p>
            </Card>
          </Col>

          {/* ********** Lyrics ********** */}
          <Col lg={12}>
            <h3 className="offcanvas-h3" align="center">
              Lyrics
            </h3>
            {props.lyrics}

            {/* ********** Credits ********** */}
            <div>
              <h3 className="offcanvas-h3" align="center">
                Credits
              </h3>
              <i className="offcanvas-icon fa-solid fa-leaf" />
              <section align="center">{props.credits}</section>
            </div>
          </Col>
        </Row>
      </Offcanvas.Body>
      {/* ********** Close ********** */}
      <Button
        onClick={props.close}
        className="offcanvas-close-btn"
        variant="dark"
        size="md"
        aria-label="close"
      >
        Back to Discography
      </Button>
    </Offcanvas>
  );
}

export default AlbumOpenOffcanvas;
