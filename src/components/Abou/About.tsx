import "./About.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from'react-bootstrap/Image';
import Ami from "../../assets/images/Ami.png"
import { Slide } from "react-swift-reveal";









const About = () => {
  return (
    <div className="About" id="About">
        
        <Slide bottom count={1} distance={"100000px"} delay={10} duration={700}>
        <Container>
            <Row ><h1 id="hola" style={{color:"#823ae0"}}>About Me</h1>
                <Col className="me1" xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }}>
                    <h2>Who am I ?</h2>
                    <p>Hello, I'm Emad, currently residing<br />
                         in the beautiful land of Canada. My passion for web development<br />
                          has led me to learn a diverse skill set, including <br />
                            Node.js, Bootstrap, HTML, CSS, Python, JavaScript, React, and<br />
                            Next.js. I'm also a studnet at NSCC  studying<br />
                             database administration .<br/><strong>I am looking for an IT co-op job for the summer of 2024. </strong> Thank you for <br />
                             taking the time to explore my portfolio..</p>
                </Col>


                <Col className="me2" xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} lg={{ span: 6, order: 2 }} >
                    <Image className="Ami" src={Ami}></Image>
                </Col>


            </Row>



        </Container>
        </Slide>
    </div>
  )
}

export default About
