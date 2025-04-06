import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import imgLogo from "../assets/img/spring-logo.png"
import hibernateLogo from "../assets/img/hibernate-logo.png" 
import junitLogo from "../assets/img/junit-logo.png" 
import kubernetesLogo from "../assets/img/kubernetes-logo.png" 
import kafkaLogo from "../assets/img/kafka-logo.png" 
import apiLogo from "../assets/img/api-logo.png" 
import microLogo from "../assets/img/micro-logo.png" 

import { SkillCard } from "./SkillCard";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 style={{color: `#1490ce`}}>Skills</h2>
                        <p>I use a lot of technology in my work and I'm eager to learn new ones. <br/>e.g., ThreeJS for this interactive earth globe at the top. Try it out! :)</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <SkillCard imgSource={imgLogo} skillName="Spring Boot"/>
                            <SkillCard imgSource={hibernateLogo} skillName="Hibernate"/>
                            <SkillCard imgSource={kubernetesLogo} skillName="Kubernetes"/>
                            <SkillCard imgSource={kafkaLogo} skillName="Kafka"/>
                            <SkillCard imgSource={junitLogo} skillName="JUnit"/>
                            <SkillCard imgSource={apiLogo} skillName="RestAPI"/>
                            <SkillCard imgSource={microLogo} skillName="Microservices"/>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
