import { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import { Canvas} from "@react-three/fiber";
import { Earth } from "./Earth";
import headerImg from "../assets/img/profile_pic_2.png";

export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="justify-content-md-center align-items-center">
          <Col xs={13} md={5} xl={6}>
              {/* <div style={{width:'300px', height: '300px', borderRadius: '50%', backgroundSize: 'cover', backgroundImage : `url(${headerImg})`}}> */}
              <div className={"animate__animated animate__fadeIn" }>
                <div className="profile-pic-wrapper">
                  <img src={headerImg} className="profile-pic" />
                    
                </div>
                <h1>{`Hi! I'm Wiktor`} <br/><span style={{color:'#1490ce'}}>Java Developer</span></h1>
                  <p>I have been working as a Java Developer since 2021. I specialize in developing web applications using Spring and Hibernate.</p>
                  <a style={{all: 'unset'}} href="https://www.linkedin.com/in/wiktor-jakobczyk99" target="_blank"><button>Let’s Connect <ArrowRightCircle size={25} /></button></a>
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
