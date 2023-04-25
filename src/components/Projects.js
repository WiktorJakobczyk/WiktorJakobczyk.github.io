import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import { ProjectCard } from "./ProjectCard";
import project1_img1 from "../assets/img/Project1_img1.png";
import project1_img2 from "../assets/img/Project1_img1.png";
import project2_img1 from "../assets/img/Project2_img1.png";
import project2_img2 from "../assets/img/Project2_img1.png";
import project3_img1 from "../assets/img/Project3_img1.png";
import project3_img2 from "../assets/img/Project3_img1.png";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from "react";

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

  const ProjectsEnum = {ManiSave : "manisave", Project2 : "Project2", Project3: "Project3"}

  const [currentProject, setCurrentProject] = useState(ProjectsEnum.ManiSave);
  let projectImgs = [
    {img : <img src={project1_img1}/>, project : ProjectsEnum.ManiSave},
    {img : <img src={project1_img2}/>, project : ProjectsEnum.ManiSave},
    {img : <img src={project2_img1}/>, project : ProjectsEnum.Project2}, 
    {img : <img src={project2_img2}/>, project : ProjectsEnum.Project2},
    {img : <img src={project3_img1}/>, project : ProjectsEnum.Project3},
    {img : <img src={project3_img2}/>, project : ProjectsEnum.Project3}
  ];

  return (
    <section className="project" id="projects">
      <Container>

        <Row>
          <Col size={12}>
             
              <div className={"animate__animated animate__fadeIn"} style={{backgroundColor:"#151515", borderRadius: "64px", textAlign:"center", padding: "60px 50px"}}>
                <h2>Projects</h2>
                <p>During my studies, I implemented such projects as:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" onClick={()=>setCurrentProject(ProjectsEnum.ManiSave)}>ManiSave</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" onClick={()=>setCurrentProject(ProjectsEnum.Project2)}>Project 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third" onClick={()=>setCurrentProject(ProjectsEnum.Project3)}>Project 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp"}>
                    <Carousel  responsive={responsive}  className="owl-carousel owl-theme project-slider">
                            {projectImgs.filter(obj => obj.project == currentProject).map(o => o.img)}
                    </Carousel>
                    <Tab.Pane id ="Tab1" eventKey="first">
                        <ProjectCard  title="ManiSave" description={<p style={{textAlign: "center"}}>Project of a budget management application.<br/> Here I created the frontend using React, Redux and react-chartjs-2. <br/>The backend part was written using Spring Cloud with microservices architecture.
                        Spring Cloud Gateway, Netflix Eureka, OAuth2, MySQL and MongoDB.<br/> The application allows to create and display articles.<br/>
                        Enter expenses by category, add new categories, view data in the form of charts and manage the budget.</p>}/>
                    </Tab.Pane>
                    <Tab.Pane id ="Tab2" eventKey="second">
                        <ProjectCard  title="Project2" description={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <ProjectCard  title="Project3" description={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>}/>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
