import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import { ProjectCard } from "./ProjectCard";
import project1_img1 from "../assets/img/Project1_img1.png";
import project1_img2 from "../assets/img/Project1_img2.png";
import project1_img3 from "../assets/img/Project1_img3.png";
import project2_img1 from "../assets/img/Project2_img1.png";
import project2_img2 from "../assets/img/Project2_img1.png";
import project3_img1 from "../assets/img/Project3_img1.jpg";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState, useEffect } from "react";

export const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const ProjectsEnum = {ManiSave : "manisave", GpsKafka : "gpskafka", MoreProjects: "moreprojects"}

  const [currentProject, setCurrentProject] = useState(ProjectsEnum.GpsKafka);
  const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
    setCarouselIndex(0); 
  }, [currentProject]);

  let projectImgs = [
    {img : <img style={{width:'92%'}} src={project1_img1} key={'project_1_img_1'}/>, project : ProjectsEnum.GpsKafka},
    {img : <img style={{width:'92%'}} src={project1_img2} key={'project_1_img_2'}/>, project : ProjectsEnum.GpsKafka},
    {img : <img style={{width:'92%'}} src={project1_img3} key={'project_1_img_3'}/>, project : ProjectsEnum.GpsKafka},
    {img : <img style={{width:'92%'}} src={project2_img1} key={'project_2_img_1'}/>, project : ProjectsEnum.ManiSave}, 
    {img : <img style={{width:'92%'}} src={project2_img2} key={'project_2_img_2'}/>, project : ProjectsEnum.ManiSave},
    {img : <img style={{width:'92%'}} src={project3_img1} key={'project_3_img_1'}/>, project : ProjectsEnum.MoreProjects},
  ];
  

  return (
    <section className="project" id="projects">
      <Container>

        <Row>
          <Col size={12}>
             
              <div className={"animate__animated animate__fadeIn"} style={{backgroundColor:"#151515", borderRadius: "64px", textAlign:"center", padding: "60px 50px"}}>
                <h2 style={{color: `#1490ce`}}>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" onClick={()=>setCurrentProject(ProjectsEnum.GpsKafka)}>GpsSignalsKafka</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" onClick={()=>setCurrentProject(ProjectsEnum.ManiSave)}>ManiSave</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third" onClick={()=>setCurrentProject(ProjectsEnum.MoreProjects)}>More Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp"}>
                  <Carousel
                    responsive={responsive}
                    className="owl-carousel owl-theme project-slider"
                    beforeChange={() => setCarouselIndex(0)} 
                    afterChange={(previousIndex, { currentIndex }) => setCarouselIndex(currentIndex)} 
                    infinite={false} 
                    slidesToShow={1}
                    slidesToScroll={1}
                    key={currentProject}
                  >
                            {projectImgs.filter(obj => obj.project == currentProject).map(o => o.img)}
                    </Carousel>
                    <Tab.Pane id ="Tab1" eventKey="first">
                        <ProjectCard  title="GpsKafka" description={<p style={{textAlign: "justify"}}>
                      This project was created as a learning exercise for <span style={{color:'#1490ce'}}>Kafka</span> and <span style={{color:'#1490ce'}}>WebSocket</span>.<br/>
                      It is built using two microservices developed with Spring Boot: GpsSignalsProducer and GpsSignalsConsumer.
                      The Producer simulates the generation of signals from GPS devices and sends these signals to a Kafka topic in real time.
                      The Consumer retrieves these signals, processes them, and forwards the most recent data to the frontend using WebSocket.
                      This setup enables simple real-time monitoring of GPS signals.<br/>
                      Check out the demo video on <a style={{color:'#1490ce'}} href="https://github.com/WiktorJakobczyk/GpsSignalsKafka" target="_blank">Github!</a> </p>}/>
                    </Tab.Pane>
                    <Tab.Pane id ="Tab2" eventKey="second">
                    <ProjectCard  title="ManiSave" description={<p style={{textAlign: "justify"}}>Project of a budget management application. <br/>
                    It consists of a frontend built with <span style={{color:'#1490ce'}}>React, Redux, and react-chartjs-2</span>, and a backend based on a microservices architecture using Spring Cloud. 
                    The backend includes components such as <span style={{color:'#1490ce'}}>Spring Cloud Gateway, Netflix Eureka for service discovery, OAuth2 for authentication, and both MySQL and MongoDB</span> for data storage.
                    The application allows users to create and view articles, enter expenses by category, add new categories, visualize financial data through charts, and manage their budget effectively.</p>}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <ProjectCard  title="What’s Next?" description={<p style={{textAlign: "justify"}}>More projects are on the way and will be added in the future.
                          Feel free to check out my <a style={{color:'#1490ce'}} href="https://github.com/WiktorJakobczyk" target="_blank">GitHub profile</a> to see what I'm currently working on and explore other learning-focused applications I've built!</p>}/>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>ł
          </Col>
        </Row>
      </Container>
    </section>
  )
}
