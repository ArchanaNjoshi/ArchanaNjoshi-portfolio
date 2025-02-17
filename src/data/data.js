
import {
    FaJava,
    FaJs,
    FaPython,
    FaReact,
    FaBitbucket,
    FaNodeJs,
    FaAws,
    FaGit,
  } from "react-icons/fa";
  import { BiLogoSpringBoot } from "react-icons/bi";
  import { DiMysql,DiRedis } from "react-icons/di";
  import { SiHibernate,SiJunit5, SiOpenapiinitiative,SiMongodb,SiCucumber,SiApachekafka } from "react-icons/si";;
  import image_weather_forcaster from "../../public/images/projects/weather_forcaster.png"
  import image_insure_spark from "../../public/images/projects/insure_spark.png"
import image_profile from "../../public/images/profile_2.png"
  
const data = {
    "name": "Archana Joshi",
    "about": "I am a Backend Java Developer with a strong foundation in building scalable, high-performance systems and a passion for optimizing code to deliver efficient and reliable solutions.",
    "about_2":"I'm a passionate Java Backend Developer with 2.5 years of experience building robust and scalable web applications. Outside of coding, I’m a chess enthusiast, an anime fan, and love dancing. I believe in writing clean, maintainable code and continuously improving my skills to provide high-quality solutions while embracing a balance of work and creativity.",
    "aboutMe": "Software Engineer with over 2.5 years of experience specialising in migrating monolithic architectures to microservices for one of America\’s leading investment banks. Proficient in Agile methodologies and delivering high-quality, scalable software solutions using a test-driven approach. Skilled at collaborating effectively with cross-functional teams to drive project success.", 
    "location": "Bangalore, India",
    "time": "Java",
    "image":image_profile,
    "profile":"public/images/Archana_Profile_Photo.jpg",
    "resume":"https://drive.google.com/file/d/1HvW9vPvwhOPOTNE6GX2_3knFNZw73lNW/view?usp=drive_link",
      "navigation": [
        { "section": "Home", "link": "#home" },
        { "section": "Skills", "link": "#skills" },
        { "section": "Experience", "link": "#experience" },
        { "section": "Projects", "link": "#projects" },
        { "section": "Contact", "link": "#contact" }
      ],
    "socialLinks": {
      "github": "https://github.com/ArchanaNjoshi",
      "linkedin": "https://linkedin.com/in/archana-n-joshi",
      "gmail": "archana.n.joshi@gmail.com",
      "sendMail": "mailto:archana.n.joshi@gmail.com"
    },
    "workExperience": [
      {
        "company": "HashedIn by Deloitte, Bangalore",
        "title": "Software Engineer",
        "period": "Sept 2022 - Present",
        "description":"I conducted an in-depth analysis of monolithic codebases and led initiatives to transition them into a microservices architecture, reducing code duplicity by at least 30%. By leveraging CompletableFuture for parallel REST calls, I optimized API performance, reducing latency by 40%. I ensured data integrity and optimal performance using both SQL and NoSQL databases while employing OpenAPI standards to generate service integration classes and interfaces. My contributions included achieving up to 100% test coverage on RESTful APIs with JUnit and utilizing Pactflow and Hoverfly for integration and component testing, ensuring seamless service communication. Additionally, I conducted knowledge transfer sessions, provided debugging support, and facilitated code reviews, actively participating in technical discussions with clients. I collaborated closely with the Product Owner to refine Jira stories, improving sprint planning and reducing cycle time. Through structured documentation, I streamlined onboarding, significantly reducing ramp-up time for new team members, while also supporting cross-functional teams with technical insights and knowledge sharing."
      },
      {
        "company": "HashedIn by Deloitte, Bangalore",
        "title": "Software Developer Intern",
        "period": "Mar 2022 - Sept 2022",
        "description":"Developed a Route Management app for airport vehicles using Spring Boot and React Native, incorporating a robust JWT-based authentication system for secure access. Designed and implemented scalable backend models for vehicles and routes, enabling efficient route assignments and vehicle tracking through RESTful APIs. Led a team of four developers, ensuring smooth collaboration and technical excellence. Worked closely with the frontend team to ensure seamless integration, enhancing overall system functionality and user experience."
      }
    ],
    "awards": [
      {
        "icon": '🏆',
        "title": "Rising Star Spot Award",
        "organization": "HashedIn by Deloitte",
        "date": "Dec 2024"
      },
      {
        icon: '🌟',
        "title": "Rising Star Spot Award",
        "organization": "HashedIn by Deloitte",
        "date": "Feb 2023"
      },
      {
        icon: '🌟',
        "title": "Rising Star Spot Award",
        "organization": "HashedIn by Deloitte",
        "date": "Nov 2023"
      }
    ],
     "skills" :[
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Spring Boot", icon: <BiLogoSpringBoot /> },      
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "SQL", icon: <DiMysql /> },
        { name: "NoSQL", icon: <SiMongodb /> },
        { name: "Hibernate", icon: <SiHibernate /> },
        // { name: "Rest", icon: <SiMongodb /> },
        { name: "Junit", icon: <SiJunit5 /> },
        // { name: "Pactflow", icon: <SiMongodb /> },
        { name: "Cucumber", icon: <SiCucumber /> },
        { name: "Kakfa", icon: <SiApachekafka /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "OpenAPI", icon: <SiOpenapiinitiative /> },
        { name: "Redis", icon: <DiRedis /> },
        { name: "Git", icon: <FaGit /> },
        { name: "BitBucket", icon: <FaBitbucket /> },
        
      
     ],
     "projects": [
         {
           "title": 'Weather Forcaster',
           "description": 'A Weather Forecaster App to get the weather details of particular location and save them for constant monitoring. It includes weather details and sunrise-sunset graph. Multiple locations displaying weather details can be saved to homepage for quick access',
           "image": image_weather_forcaster ,
           "tags": ['React', 'Redux', 'JavaScript'],
           "demo": 'https://archananjoshi.github.io/Weather-Forecaster/',
           "code": 'https://github.com/ArchanaNjoshi/Weather-Forecaster/tree/main'
         },
         {
           "title": 'Insure Spark',
           "description": 'Developed InsureSpark, an application that provides policies for flight ticket delays or cancellations, leveraging a microservices architecture with Node.js for the backend and React for the frontend. Utilized MySQL for efficient data management and storage. Once policies were created, smart contracts were generated and deployed on the Ethereum blockchain via Infura, ensuring transparency and decentralization in policy execution.',
           "image": image_insure_spark,
           "tags": ['Node.js', 'React', 'MySQL'],
           "demo": '',
           "code": ''
         }
       ],
    "skillSet": {
    "Programming Languages": [
      { "name": "JavaScript", "icon": "FaJsSquare" },
      { "name": "Python", "icon": "FaPython" },
      { "name": "Java", "icon": "FaJava" }
    ],
    "Frontend": [
      { "name": "React", "icon": "FaReact" },
      { "name": "HTML", "icon": "FaHtml5" },
      { "name": "CSS", "icon": "FaCss3" }
    ],
    "Backend": [
      { "name": "Node.js", "icon": "FaNodeJs" },
      { "name": "Spring Boot", "icon": "SiSpringboot" },
      { "name": "Express.js", "icon": "SiExpress" }
    ],
    "Databases": [
      { "name": "PostgreSQL", "icon": "SiPostgresql" },
      { "name": "MongoDB", "icon": "SiMongodb" }
    ],
    "Cloud & DevOps": [
      { "name": "AWS", "icon": "FaAws" },
      { "name": "Docker", "icon": "FaDocker" }
    ]
  }

  };

export default data;