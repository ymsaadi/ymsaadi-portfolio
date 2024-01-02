import projectOne from "../assets/project-1.webp";
import projectTwo from "../assets/project-2.webp";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "E-commerce Spring Boot Microservices",
    image: projectOne,
    description: (
      <>
        <p>
          Developed a streamlined E-commerce Spring Boot Microservices system
          with Kafka integration, fault tolerance, and enhanced security.
          Configured Spring Cloud Gateway for routing and real-time inventory
          checks, leveraging PostgreSQL and MongoDB for efficiency.
        </p>
      </>
    ),
    githubLink: "https://github.com/ymsaadi/spring-boot-microservices",
    demo: "https://netlify.com",
  },
  2: {
    title: "Game Recommendation API",
    image: projectTwo,
    description: (
      <>
        <p>
          Created a dynamic Game Recommendation API, utilizing IGDB for game
          data. Implemented user-friendly features such as friend requests, game
          reviews, and personalized recommendations. Enhanced security and
          documentation with JWT authentication and OpenAPI support.
        </p>
      </>
    ),
    githubLink: "https://github.com/ymsaadi/GameRecommendationAPI",
    demo: "https://netlify.com",
  },
};

export default projects;
