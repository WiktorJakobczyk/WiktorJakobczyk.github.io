import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';

export const Hero = () => {


  return (
    <section className="hero" id="home">
      <Container>
        <Row className="justify-content-md-center align-items-center">
        
              <div className="hero-bx">
                  <h1 style={{color: '#1490ce'}}>Experience</h1>
                  <div style={{marginLeft: '1px'}}>
                  <h5 style={{color: `white`}}>Axians 03.2023 - present</h5>
                  <h6 style={{color: '#1490ce'}}>Java Developer</h6>
                  <p>
                    P1 Project at the e-Health Center – gabinet.gov.pl. <br/>
                    A tool for medical professionals that supports, among other things, e-prescriptions, e-referrals, and patient documentation management. <br/>
                    Working in Nexus Scrum. I am responsible for creating new microservices, fixing bugs and code review. <br/>
                    <span style={{color:'#1490ce'}}>Tech Stack: Spring Boot, Hibernate, SOAP, REST, Docker, Angular, MySql, Kibana, Hazelcast</span>
                  </p>
                  <br/>
                  <h5 style={{color: `white`}}>Accenture 09.2021 - 02.2023</h5>
                  <h6 style={{color:'#1490ce'}}>Java Developer</h6>
                  <h6 style={{color:'#1490ce'}}>Junior Java Developer (until 02/2022)</h6>
                  <p>
                  Worked on a web application integrating logistics, e-commerce, and supply chain processes. <br/>
                  The project was developed for the largest Polish company specializing in the design, production, and distribution of clothing. <br/>
                  My responsibilities included implementing new features, fixing bugs, and performing code reviews (Clean Code and REST API principles).<br/>
                  Spring Boot web application with extensive use of Hibernate. <br/>
                    <span style={{color:'#1490ce'}}>Tech Stack: Spring Boot, Hibernate, RestApi, React, PostgreSQL, OpenShift</span>
                  </p>
                  <br/>
                  <h5 style={{color: `white`}}>ABB 004.2021 - 09.2021</h5>
                  <h6 style={{color:'#1490ce'}}>Intern - Software Developer</h6>
                  <p>
                  Developed a system for monitoring machine components and managing a fleet of industrial equipment. <br/>
                  The solution included real-time data collection, status tracking, and alert mechanisms for maintenance needs. <br/>
                  The project aimed to improve operational efficiency and reduce downtime through predictive diagnostics. <br/>
                  <span style={{color:'#1490ce'}}>Tech Stack: Python, Tensorflow, Flask, Azure, CosmosDB</span>
                  </p> 
                  </div>
              </div>
        </Row>
      </Container>
    </section>
  )
}
