import { useState, useEffect, Suspense, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import { Canvas} from "@react-three/fiber";
import { Earth } from "./Earth";
import * as THREE from "three";

export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="justify-content-md-center align-items-center">
          <Col xs={13} md={5} xl={6}>

              <div className={"animate__animated animate__fadeIn" }>
                <h1>{`Hi! I'm Wiktor`} <br/><span>Java Developer</span></h1>
                  <p>I have been working as a Java Developer since 2021. I specialize in developing web applications using Spring and Hibernate. </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>
          </Col>
          <Col xs={13} md={5} xl={6}>
                 <Canvas className="canvas animate__animated animate__fadeIn" gl={{ antialias: true }} dpr={window.devicePixelRatio} >
                  <Suspense fallback={null}>
                    <Earth/>
                  </Suspense>
                </Canvas>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
