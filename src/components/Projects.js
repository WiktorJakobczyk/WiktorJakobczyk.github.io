import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import { ProjectCard } from "./ProjectCard";
import project1_img1 from "../assets/img/Project1_img1.png";
import project2_img1 from "../assets/img/battle_1.png";
import project2_img2 from "../assets/img/battle_2.png";
import project2_img3 from "../assets/img/battle_3.png";
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

  const ProjectsEnum = {ManiSave : "manisave", Game : "game"}

  const [currentProject, setCurrentProject] = useState(ProjectsEnum.ManiSave);
  let projectImgs = [{img : <img src={project1_img1}/>, project : ProjectsEnum.ManiSave}, {img : <img src={project1_img1}/>, project : ProjectsEnum.ManiSave},
  {img : <img src={project2_img2}/>, project : ProjectsEnum.Game}, {img : <img src={project2_img3}/>, project : ProjectsEnum.Game}];

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
                      <Nav.Link eventKey="first" onClick={()=>setCurrentProject(ProjectsEnum.ManiSave)}>Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" onClick={()=>setCurrentProject(ProjectsEnum.Game)}>Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp"}>
                    <Carousel  responsive={responsive}  className="owl-carousel owl-theme project-slider">
                            {projectImgs.filter(obj => obj.project == currentProject).map(o => o.img)}
                    </Carousel>
                    <Tab.Pane id ="Tab1" eventKey="first">
                    <ProjectCard  title="ManiSave" description={<p>Project of a budget management application.<br/> Here I created the frontend using React, Redux and react-chartjs-2. <br/>The backend part was written using Spring Cloud with microservices architecture.
                    Spring Cloud Gateway, Netflix Eureka, OAuth2, MySQL and MongoDB.<br/> The application allows to create and display articles.<br/>
                    Entering expenses by category. Adding new categories. Viewing in the form of charts, and managing the budget.</p>}/>
                    </Tab.Pane>
                    <Tab.Pane id ="Tab2" eventKey="second">

                    <ProjectCard  title="BattleGame" description={<p>It's well known battleships game made with Java FX technology.</p>}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
