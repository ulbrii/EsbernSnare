import ericdryfka from "../../images/ericdryfka.jpg";
import adamjones from "../../images/adamjones.jpg";
import adamjones2 from "../../images/adamjones2.jpg";
import adamandluke from "../../images/adamandluke.jpg";
import lukejones from "../../images/lukejones.jpg";
import josephbrockman from "../../images/josephbrockman.jpg";
import josiahcrumrine from "../../images/josiahcrumrine.jpg";
import fullband1 from "../../images/fullband1.jpg";
import fullband3 from "../../images/fullband3.jpg";
import fullband4 from "../../images/fullband4.jpg";
import fullband6 from "../../images/fullband6.jpg";
import fullband7 from "../../images/fullband7.jpg";
import fullband9 from "../../images/fullband9.jpg";
import fullbandbw1 from "../../images/fullband-bw1.jpg";
import fullbandbw2 from "../../images/fullband-bw2.jpg";
import fullbandbw3 from "../../images/fullband-bw3.jpg";
import fullbandbw4 from "../../images/fullband-bw4.jpg";
import tableshot1 from "../../images/tableshot1.jpg";
import tableshot2 from "../../images/tableshot2.jpg";
import tableshot3 from "../../images/tableshot3.jpg";
import playground2 from "../../images/playground2.jpg";

import { Row, Col } from "react-bootstrap";

function Media() {
  return (
    <section className="mw-100 media-section">
      <Row>
        {/* Videos Section */}
        <h2 className="my-4">Videos</h2>

        {/* Video Slot One */}
        <Col>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/SKbYLOiXKew"
              title="Most of You - Official Music Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <p>
              Official music video for our song 'Most of You', from the album
              'does it feel like i'm not there?'
            </p>
          </div>
        </Col>

        {/* Video Slot Two */}
        <Col>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/1y90H_DFmFk"
              title="Kicking the Cold Out - Official Lyric Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <p>
              Official lyric video for our song 'Kicking the Cold Out', from the
              album 'does it feel like i'm not there?'
            </p>
          </div>
        </Col>

        {/* Video Slot Three */}
        <Col>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/kx2lr2b9HVI"
              title="does it feel like i'm not there? - Official Album Promo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>{" "}
          </div>
          <div>
            <p>
              Official album promo for our album 'does it feel like i'm not
              there?'
            </p>
          </div>
        </Col>
      </Row>
      <hr />

      {/* Photos Section */}
      <h2 className="my-4">Photos</h2>
      <Row className="justify-content-center">
        <Col lg={4}>
          <img className="w-100" src={tableshot1}></img>
        </Col>
        <Col lg={4}>
          <img className="w-100" src={tableshot2}></img>
        </Col>
        <Col lg={4}>
          <img className="w-100" src={tableshot3}></img>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={8}>
          <img className="w-100" src={playground2}></img>
          <img className="w-100" src={fullbandbw1}></img>
          <img className="w-100" src={adamandluke}></img>
        </Col>
        <Col lg={3}>
          <img className="w-100" src={ericdryfka}></img>
          <img className="w-100" src={adamjones}></img>
          <img className="w-100" src={lukejones}></img>
          <img className="w-100" src={josephbrockman}></img>
          <img className="w-100" src={josiahcrumrine}></img>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <img className="w-100" src={fullbandbw2}></img>
        </Col>
        <Col lg={6}>
          <img className="w-100" src={fullbandbw3}></img>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={6}>
          <img className="w-100" src={fullband1}></img>
        </Col>
        <Col lg={6}>
          <img className="w-100" src={fullband3}></img>
          <img className="w-100" src={fullbandbw4}></img>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <img className="w-100" src={adamjones2}></img>
        </Col>
        <Col lg={4}>
          <img className="w-100" src={fullband4}></img>
        </Col>
        <Col lg={4}>
          <img className="w-100" src={fullband7}></img>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <img className="w-100" src={fullband6}></img>
        </Col>
        <Col lg={6}>
          <img className="w-100" src={fullband9}></img>
        </Col>
      </Row>

      {/* Photo Credit */}
      <Row className="photo-credit">
        <p>Lauren Malp Photography</p>
        <p>
          <a
            href="https://www.instagram.com/laurenmalpfilm/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fa-brands fa-instagram fa-md" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100083293761807"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fa-brands fa-facebook fa-md" />
          </a>
          <a
            href="https://www.laurenmalp.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fa-solid fa-globe fa-md" />
          </a>
        </p>
      </Row>
    </section>
  );
}

export default Media;
