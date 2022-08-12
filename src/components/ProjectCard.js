import { Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const ProjectCard = ({ title, description, imgUrls}) => {
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
  let projectImages = []
  imgUrls.forEach(x=>projectImages.push(<img src={x} />));
 

  return (
    <Col size={32} sm={16} md={12}>
      <div className="project-card">
      <div className="skill-bx wow zoomIn">
      <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme project-slider">
            {projectImages}
        </Carousel>
        </div>
     
        <div className="project-desc">
          <h2>{title}</h2>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
