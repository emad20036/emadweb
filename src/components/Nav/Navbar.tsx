import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollIntoView from 'react-scroll-into-view'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";





function Navba() {
    return (
      <Navbar expand="lg" className="custom-navbar" sticky="top" >
        <Container>
          <Navbar.Brand href="#home" style={{ color: "#823ae0" }}>
            Emad Halawani
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-hamburger"
          ><span className="navbar-toggler-icon"><FontAwesomeIcon icon={faBars} size="xl" style={{ color: "#823ae0" }} /></span></Navbar.Toggle>
  

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="custom-toggler"
            style={{ color: "blue" }}
          >
            <Nav className="ms-auto">
              <ScrollIntoView selector="#home">
                <Nav.Link style={{ color: "#823ae0" }} href="#Home">
                  Home
                </Nav.Link>
              </ScrollIntoView>
              <ScrollIntoView selector="#About">
                <Nav.Link style={{ color: "#823ae0" }} href="#About">
                  About Me
                </Nav.Link>
              </ScrollIntoView>
              <ScrollIntoView selector="#Contact">
                <Nav.Link style={{ color: "#823ae0" }} href="#Contact">
                  Contact
                </Nav.Link>
              </ScrollIntoView>

              <ScrollIntoView selector="#skills">
                <Nav.Link style={{ color: "#823ae0" }} href="#skills">
                  Skills
                </Nav.Link>
              </ScrollIntoView>

              <ScrollIntoView selector="#achievement">
                <Nav.Link style={{ color: "#823ae0" }} href="#achievement">
                  achievement
                </Nav.Link>
              </ScrollIntoView>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
    }
    


export default Navba
