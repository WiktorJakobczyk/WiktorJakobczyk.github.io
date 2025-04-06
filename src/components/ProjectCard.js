import { Col } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';



export const ProjectCard = ({ title, description}) => {

  return (
 
    <Col size={32} sm={16} md={12}>
      <div className="project-card">
        <div className="project-desc">
          <h2 style={{textAlign: 'left', marginLeft: '7.3%'}}>{title}</h2>
          <span align="left">{description}</span>
        </div>
      </div>
    </Col>
  )
}
