import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import { ProjectCard } from "./ProjectCard";
import project1_img1 from "../assets/img/Project1_img1.png";


export const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container>

        <Row>
          <Col size={12}>
             
              <div className={"animate__animated animate__fadeIn"} style={{backgroundColor:"#151515", borderRadius: "64px", textAlign:"center", padding: "60px 50px"}}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp"}>
                    <Tab.Pane eventKey="first">
                    <ProjectCard title="ManiSave" description={<p>Project of a budget management application.<br/> Here I created the frontend using React, Redux and react-chartjs-2. <br/>The backend part was written using Spring Cloud with microservices architecture.
Spring Cloud Gateway, Netflix Eureka, OAuth2, MySQL and MongoDB.<br/> The application allows to create and display articles.<br/>
Entering expenses by category. Adding new categories. Viewing in the form of charts, and managing the budget.</p>} imgUrls={[project1_img1, project1_img1]}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
