import { Col, Container, Row } from "react-bootstrap";
import air from "../../Assets/Projects/air.png";
import attendance from "../../Assets/Projects/attendance.png";
import bricker from "../../Assets/Projects/bricker.png";
import driver from "../../Assets/Projects/driver.png";
import food from "../../Assets/Projects/food.png";
import quiz from "../../Assets/Projects/quiz.webp";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bricker}
              isBlog={false}
              title="Bricker LEGO-Data"
              description="Developed a scalable Java application integrated with RebrickAble APIs. Worked on backend development using Java and Spring Boot to manage LEGO data efficiently."
              ghLink="https://github.com/abbas-sadiq/Bricker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={air}
              isBlog={false}
              title="Airline Reservation System"
              description="A backend-driven airline booking system enabling users to reserve tickets online. Designed with structured CRUD operations and optimized data flow for smooth reservation management."
              ghLink="https://github.com/abbas-sadiq/Airline-Reservation-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendance}
              isBlog={false}
              title="Attendance Management System"
              description="A scalable backend solution for tracking attendance with role-based access control. Supports administrators, teachers, and users with automated and efficient attendance management."
              ghLink="https://github.com/abbas-sadiq/Attendance-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Islamic Quiz Application"
              description="An engaging quiz platform featuring dynamic question banks and real-time scoring. Built with Spring Boot, focusing on clean architecture and reliable API performance."
              ghLink="https://github.com/abbas-sadiq/Islamic-Quiz-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Order Management System"
              description="A robust backend system developed using Java and Spring Boot to manage food orders efficiently. Implements RESTful APIs and CRUD operations with JDBC for reliable data handling."
              ghLink="https://github.com/abbas-sadiq/Food-Order-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={driver}
              isBlog={false}
              title="Driver Drowsiness Detection System"
              description={`A Driver Drowsiness Detection System using Computer Vision and Deep Learning. 
              The system monitors driver behavior in real-time and detects fatigue using OpenCV and CNN model. 
              When drowsiness is detected, an alert is triggered to prevent potential accidents and improve road safety.`}
              ghLink="https://github.com/abbas-sadiq/driver-drowsiness-detection-system"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;