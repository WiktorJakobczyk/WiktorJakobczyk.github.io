import { Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect } from "react";
import { useState } from "react";
import project1_img1 from "../assets/img/Project1_img1.png";
import project2_img1 from "../assets/img/battle_1.png";
import project2_img2 from "../assets/img/battle_2.png";
import project2_img3 from "../assets/img/battle_3.png";
import { useRef } from "react";


export const ProjectCard = ({ title, description}) => {

  return (
 
    <Col size={32} sm={16} md={12}>
      <div className="project-card">
    
        <div className="project-desc">
          <h2>{title}</h2>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
