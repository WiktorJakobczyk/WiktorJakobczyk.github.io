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
        <Col xs={12} md={4} xl={5}>
                 <div>
                  <img src={headerImg} alt="Header Img"/>
                </div>
          </Col>
          <Col xs={12} md={4} xl={5}>
              <div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     <br/><br/>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
