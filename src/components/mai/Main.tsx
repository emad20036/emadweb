import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import "./Main.css"
import profile from "../../assets/images/profile.png"
import { faLinkedin, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from 'react-bootstrap/Nav';



function Main() {


  const resume =() => {
    alert("Emad's resume is not available to the public at the moment, please contact me directly. Thank you!") 
  }




  return (
    <section id='Home'>
    <Container id="con">
      <Row id="Row">
        <Col className="col1" xs={12} sm={12} md={2} lg={2}>
          <div className="main-icons">
            <p>Emad Halawani</p>
          </div>
          <div className="main-icons div-main">
            <a href="https://www.linkedin.com/in/emad-halawani/">
              <FontAwesomeIcon className="ico i" icon={faLinkedin} />
            </a>
            <a href="https://github.com/emad20036">
              <FontAwesomeIcon className="ico i" icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/emad.halawani/">
              <FontAwesomeIcon className="ico i" icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/emad.halawani.16">
              <FontAwesomeIcon className="ico -" icon={faFacebook} />
            </a>
          </div>
        </Col>
        <Col
          className="col2 col3 d-flex align-items-center justify-content-center"
          xs={12}
          sm={12}
          md={5}
          lg={4}
        >
          <Image src={profile} className="img-fluid" id="myimg" />

        </Col>
        <Col className="col2" xs={12} sm={12} md={5} lg={6}>
          <h1>Hi, I'm Emad</h1>
          <p>Frontend Developer / Database administration (student)</p>
          <h6>My favorite quotes is : </h6>
          <p className="qoute">
            "Never quit believing that you can develop in life. <br />
            Never give up. <br />
            Don’t deny the inward spirit that provides the drive to accomplish
            great things in life. "
          </p>
          <div className="buttons">
            <button className="btn1"> <Nav.Link className="colmo"  href="#Contact">
                  Contact Me
                </Nav.Link></button>
            <button className="btn2" onClick={resume}>Download CV</button>
          </div>
        </Col>
      </Row>
    </Container></section>
  );
}

export default Main;

