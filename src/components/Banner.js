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
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
