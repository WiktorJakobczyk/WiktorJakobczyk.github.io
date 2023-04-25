import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile_pic2.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Hero = () => {


  return (
    <section className="hero" id="home">
      <Container>
        <Row className="justify-content-md-center align-items-center">
        <Col xs={16} md={5} xl={6}>
                 <div>
                  <img src={headerImg} alt="Header Img"/>
                </div>
          </Col>
          <Col xs={12} md={4} xl={5}>
              <div>
                  <h3>Experience</h3>
                  <h5>S&T 03.2023 - present</h5>
                  <h6 style={{color:'#1490ce'}}>Java Developer</h6>
                  <p>
                    Working in Nexus Scrum. I am responsible for creating new features, fixing bugs and code review. <br/>
                    Spring Boot Web project, SOAP and microservices.
                  </p>
                  <br/>
                  <h5>Accenture 03.2022 - 02.2023</h5>
                  <h6 style={{color:'#1490ce'}}>Java Developer</h6>
                  <p>
                    Working in Scrum team. I am responsible for creating new features, fixing bugs and code review (Clean Code and RestAPI principles). <br/>
                    Spring Boot Web project with frequent usage of Hibernate.
                  </p>
                  <br/>
                  <h5>Accenture 09.2021 - 02.2022</h5>
                  <h6 style={{color:'#1490ce'}}>Junior Java Developer</h6>
                  <p>
                    Spring Boot project with PostgreSQL database.
                  </p>
                  <br/>
                  <h5>ABB 004.2021 - 09.2021</h5>
                  <h6 style={{color:'#1490ce'}}>Intern - Software Developer</h6>
                  <p>
                    Python project using artificial intelligence and frameworks such as Tensorflow and Flask.
                  </p> 
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
