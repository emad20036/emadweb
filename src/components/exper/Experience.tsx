import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import remote from "../../assets/images/Animation - 1696856256287.json";
import "./Experience.css";
import { Slide } from "react-swift-reveal";
import Lottie from "react-lottie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMeta} from '@fortawesome/free-brands-svg-icons'
import { faU } from "@fortawesome/free-solid-svg-icons";


const Experience = () => {
  const defaultOptions = {
    loop: true, // Set to true for looping
    autoplay: true, // Set to true for automatic playback
    animationData: remote, // JSON animation data
  };

  return (
    <section id="achievement">
    <div className="experience-section">
      <Slide bottom count={1} distance={"100000px"} delay={-1} duration={700}>
        <Container id="cor">
          <Row className="experience" id="ence">
            <Col className="exp-image" sm={12} md={6} lg={6}>
              <div className="rem"> <Lottie options={defaultOptions} /></div>
           
            </Col>
            <Col className="exp-content" sm={12} md={6} lg={6}>
              <h2 style={{color:"#823ae0"}}>Achievement</h2>
              <div className="job1">
                <div className="job-icon">
                <p>2022-2023</p>
                </div><div>
                <p>Meta Front-End Developer (Course)</p>

                </div>
                <div className="job">
                <FontAwesomeIcon className="meta" icon={faMeta} fade />                  </div>
                  
                
              </div>
              <div className="job1">
                <div className="job-icon">
                <p>2022-2023</p>
                </div><div>
                <p>The Complete 2023 Web Development Bootcamp</p>

                </div>
                <div className="job">
                <FontAwesomeIcon className="meta" icon={faU} fade />                  </div>
                  
                
              </div>
              {/* <div className="job1">
                <div className="job-icon">
                </div><div>
               

                </div>
                <div className="job">
                
                  
                
              </div></div>
              <div className="job1">
                <div className="job-icon">
                </div><div>
               

                </div>
                <div className="job">
                
                  
                
              </div></div> */}
            </Col>
          </Row>
        </Container>
      </Slide>
    </div></section>
  );
};

export default Experience;
