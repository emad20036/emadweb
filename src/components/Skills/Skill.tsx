import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Skill.css"
import node from  "../../assets/skills/icons8-js-96__1_-removebg-preview.png"
import reac from "../../assets/skills/icons8-react-native-512-removebg-preview.png"
import Mongod from "../../assets/skills/icons8-mongo-db-96__2_-removebg-preview.png"
import boot from "../../assets/skills/icons8-bootstrap-logo-512-removebg-preview.png"
import html from "../../assets/skills/icons8-html-logo-512-removebg-preview.png"
import css from "../../assets/skills/icons8-css-logo-512-removebg-preview.png"
import js from "../../assets/skills/icons8-javascript-logo-512-removebg-preview.png"
import pyth from "../../assets/skills/icons8-python-512-removebg-preview.png"
import exp from "../../assets/skills/icons8-express-js-512-removebg-preview.png"
import Marquee from "react-fast-marquee";
import { Slide } from "react-swift-reveal";
import { Line } from 'rc-progress';



const techData = [
    
    {
      id: 2,
      name: 'React',
      logo: reac,
      percent: 89,
    },
    {
      id: 1,
      name: 'Node.js',
      logo: node,
      percent: 65,
    },
    {
      id: 3,
      name: 'CSS',
      logo: css,
      percent: 98,
    },
    {
      id: 4,
      name: 'MongoDB',
      logo: Mongod,
      percent: 50,
    },
    {
      id: 5,
      name: 'Bootstrap',
      logo: boot,
      percent: 90,
    },
    {
      id: 6,
      name: 'JavaScript',
      logo: js,
      percent: 76,
    },
    {
      id: 7,
      name: 'Python',
      logo: pyth,
      percent: 40,
    },
    {
      id: 8,
      name: 'Express',
      logo: exp,
      percent: 59,
    },
    {
      id: 9,
      name: 'HTML',
      logo: html,
      percent: 100,
    },
    // Add more technologies as needed
  ];
  


const Skill = () => {

  return (
    <div className='skil'id='skills'>
        <Container>
            <Row className='tet'><h2 className='title' style={{color:"#823ae0"}}>Skills</h2>
            <Slide bottom count={1} distance={"100000px"} delay={-1} duration={700}>

            
                <Col sm={12} md={12} lg={12}                id='skills'>
                     <Marquee 
                        gradient={false} 
                        speed={100} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                    <div className='skill-container'>
                   
                        {techData.map((tech) => (
                            <div className='skill-item' key={tech.id}>
                                <img src={tech.logo} alt={tech.name} />
                                <h6>{tech.name}</h6>
                                <Line percent={tech.percent} strokeWidth={4} strokeColor="#823ae0" />
                            </div>
                        ))}
                        
                    </div></Marquee>
                </Col>

                </Slide>

            </Row>




        </Container>
        
      
    </div>
  )
}

export default Skill
