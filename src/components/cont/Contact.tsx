import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";
import cont from "../../assets/images/contac.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Lottie from "react-lottie";
import { useFormspark } from "@formspark/use-formspark"; // Import the useFormspark hook

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cont,
  };

  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",

    
  });



  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const FORMSPARK_FORM_ID = "UIPh6mbw"; // Replace with your actual Formspark form ID
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      await submit({ ...formData });
      setShow(true);
      // Clear form fields after submission if needed
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setShow(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    }
  };

  return (
    <section className="whole" id="Contact">
      <div id="whole">
        <Container id="contact">
          <h1 style={{color:"#823ae0"}}>Contact Me</h1>
          <Row>
            <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={6} lg={{ span: 4, order: 1 }} className="form">
              <Form id="fo" onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="li">Your Name :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mark King"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="li">Your Email address :</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="li">Your Message :</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={7}
                    placeholder="Message....."
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <div id="subbutton" className="d-grid gap-2">
                  <Button
                    type="submit"
                    id="but"
                    variant="primary"
                    size="sm"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                  {show && <p style={{color:"#823ae0"}}>Your form has been sent successfully, thank you !. </p>}
                </div>
                
              </Form>
            </Col>
            <Col className="top" xs={{ span: 12, order: 3 }} sm={{ span: 12, order: 3 }} md={6} lg={{ span: 4, order: 2 }}>
              <div className="middile">
                <FontAwesomeIcon className="icon" icon={faPhone} />
                <p id="confont">+902 000 0000</p>
              </div>
              <div className="middile">
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                <p id="confont">Halawaniemad6@gmail.com</p>
              </div>
              <div className="middile">
                <FontAwesomeIcon className="icon" icon={faLocationPin} />
                <p id="confont">Halifax, NS, Canada</p>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={12} lg={{ span: 4, order: 3 }} className="d-block d-md-none d-lg-block">
              <Lottie options={defaultOptions} />
            </Col>
          </Row>
          <div className="fine">
            {" "}
            <div className="iconns">
              <a href="https://www.linkedin.com/in/emad-halawani/">
                <FontAwesomeIcon className="ico" icon={faLinkedin} />
              </a>
              <a href="https://github.com/emad20036">
                <FontAwesomeIcon className="ico" icon={faGithub} />
              </a>
              <a href="https://www.instagram.com/emad.halawani/">
                <FontAwesomeIcon className="ico" icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com/emad.halawani.16">
                <FontAwesomeIcon className="ico" icon={faFacebook} />
              </a>
            </div>{" "}
            <p>© 2023 | Emad Halawani</p>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Contact
