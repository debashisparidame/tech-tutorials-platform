// Professional tutorial data with high-quality icons from DevIcons CDN
const iconUrl = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;
const plainIconUrl = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-plain.svg`;

export const tutorialData = [
  {
    category: "Java",
    items: [
      { name: "Core Java", icon: iconUrl("java") },
      {
        name: "Java Servlet",
        icon: "https://www.oracle.com/a/ocom/img/cb71-java-logo.png",
      },
      {
        name: "JavaServer Pages (JSP)",
        icon: "https://www.oracle.com/a/ocom/img/cb71-java-logo.png",
      },
      { name: "Spring Boot", icon: iconUrl("spring") },
      { name: "Spring Framework", icon: iconUrl("spring") },
      {
        name: "Hibernate ORM",
        icon: "https://hibernate.org/images/hibernate-logo.svg",
      },
      { name: "RESTful Web Services", icon: iconUrl("java") },
      { name: "Spring Cloud Microservices", icon: iconUrl("spring") },
      { name: "Java Swing GUI", icon: iconUrl("java") },
      { name: "JavaFX", icon: iconUrl("java") },
      {
        name: "Apache POI",
        icon: "https://svn.apache.org/repos/asf/comdev/project-logos/originals/poi.svg",
      },
      { name: "JavaServer Faces (JSF)", icon: iconUrl("java") },
      { name: "JSTL", icon: iconUrl("java") },
      { name: "JavaMail API", icon: iconUrl("java") },
    ],
  },
  {
    category: "Python",
    items: [
      { name: "Python Fundamentals", icon: iconUrl("python") },
      { name: "Selenium WebDriver", icon: iconUrl("selenium") },
      { name: "Django Framework", icon: iconUrl("django") },
      { name: "Flask Web Framework", icon: iconUrl("flask") },
      { name: "NumPy", icon: iconUrl("numpy") },
      { name: "Tkinter GUI", icon: iconUrl("python") },
      { name: "PyTorch", icon: iconUrl("pytorch") },
      {
        name: "Pygame",
        icon: "https://www.pygame.org/ftp/pygame-head-party.png",
      },
      { name: "SciPy", icon: "https://scipy.org/images/logo.svg" },
      { name: "Pandas", icon: iconUrl("pandas") },
      { name: "OpenCV", icon: iconUrl("opencv") },
      { name: "Matplotlib", icon: iconUrl("matplotlib") },
      { name: "Kivy", icon: "https://kivy.org/logos/kivy-logo-black-256.png" },
      { name: "Jupyter Notebook", icon: iconUrl("jupyter") },
    ],
  },
  {
    category: "Projects",
    items: [
      // Java Projects
      { name: "E-Commerce Website (Java)", icon: iconUrl("java") },
      { name: "Library Management System", icon: iconUrl("java") },
      { name: "Hospital Management System", icon: iconUrl("java") },
      { name: "Inventory Management System", icon: iconUrl("spring") },
      { name: "Blog Application (Spring Boot)", icon: iconUrl("spring") },
      { name: "Chat Application (Java)", icon: iconUrl("java") },
      { name: "File Sharing System", icon: iconUrl("java") },

      // Python Projects
      { name: "Flask E-Commerce", icon: iconUrl("flask") },
      { name: "Weather App (Python)", icon: iconUrl("python") },
      { name: "Face Recognition System", icon: iconUrl("opencv") },
      { name: "Chatbot with AI", icon: iconUrl("python") },
      { name: "Data Analysis Dashboard", icon: iconUrl("pandas") },
      { name: "Web Scraper (BeautifulSoup)", icon: iconUrl("python") },
      { name: "Machine Learning Projects", icon: iconUrl("pytorch") },

      // MERN Stack Projects
      { name: "Social Media App (MERN)", icon: iconUrl("react") },
      { name: "E-Commerce Store (MERN)", icon: iconUrl("mongodb") },
      { name: "Real-Time Chat App", icon: iconUrl("nodejs") },
      { name: "Task Manager (MERN)", icon: iconUrl("react") },
      { name: "Video Streaming Platform", icon: iconUrl("nodejs") },
      { name: "Food Delivery App", icon: iconUrl("react") },
      { name: "Job Portal (MERN)", icon: iconUrl("mongodb") },
    ],
  },
];
