
// This data is structured to mimic what an API might return.
// Icons are placeholder URLs from a CDN that provides logos.
const iconUrl = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;
const plainIconUrl = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-plain.svg`;

export const tutorialData = [
  {
    category: 'Java',
    items: [
      { name: 'Java', icon: iconUrl('java') },
      { name: 'Servlet', icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384879.png' },
      { name: 'JSP', icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384879.png' },
      { name: 'Spring Boot', icon: iconUrl('spring') },
      { name: 'Spring Framework', icon: iconUrl('spring') },
      { name: 'Hibernate', icon: 'https://design.jboss.org/hibernate/logo/final/hibernate_logo_stacked_rgb_150px.png' },
      { name: 'Java Web Services', icon: iconUrl('java') },
      { name: 'Spring Cloud', icon: iconUrl('spring') },
      { name: 'Java Swing', icon: iconUrl('java') },
      { name: 'JavaFX', icon: iconUrl('java') },
      { name: 'Apache POI', icon: 'https://poi.apache.org/images/logo-square.png' },
      { name: 'JSF', icon: iconUrl('java') },
      { name: 'JSTL', icon: iconUrl('java') },
      { name: 'Java Mail', icon: iconUrl('java') },
    ]
  },
    {
    category: 'Python',
    items: [
      { name: 'Python', icon: iconUrl('python') },
      { name: 'Selenium', icon: 'https://www.selenium.dev/images/selenium_logo_square_green.png' },
      { name: 'Django', icon: iconUrl('django') },
      { name: 'Flask', icon: iconUrl('flask') },
      { name: 'NumPy', icon: iconUrl('numpy') },
      { name: 'Tkinter', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Tcltk-logo.svg/1200px-Tcltk-logo.svg.png' },
      { name: 'Pytorch', icon: iconUrl('pytorch') },
      { name: 'Pygame', icon: 'https://www.pygame.org/docs/_static/pygame_logo.png' },
      { name: 'Scipy', icon: iconUrl('scipy') },
      { name: 'Pandas', icon: iconUrl('pandas') },
      { name: 'OpenCV', icon: iconUrl('opencv') },
      { name: 'Matplotlib', icon: iconUrl('matplotlib') },
      { name: 'Openpyxl', icon: 'https://openpyxl.readthedocs.io/en/stable/_static/logo.png' },
      { name: 'Kivy', icon: 'https://kivy.org/logos/kivy-logo-black-64.png' },
      { name: 'Jupyter', icon: iconUrl('jupyter') },
      { name: 'Python CGI', icon: iconUrl('python') },
    ]
  },
   {
    category: 'Projects',
    items: [
      { name: 'Java Projects', icon: iconUrl('java') },
      { name: 'Servlet Projects', icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384879.png' },
      { name: 'JSP Projects', icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384879.png' },
      { name: 'Spring Boot Projects', icon: iconUrl('spring') },
      { name: 'Spring Framework Projects', icon: iconUrl('spring') },
      { name: 'Hibernate Projects', icon: 'https://design.jboss.org/hibernate/logo/final/hibernate_logo_stacked_rgb_150px.png' },
      { name: 'Java Web Services Projects', icon: iconUrl('java') },
      { name: 'Spring Cloud Projects', icon: iconUrl('spring') },
      { name: 'Java Swing Projects', icon: iconUrl('java') },
      { name: 'JavaFX Projects', icon: iconUrl('java') },
      { name: 'Apache POI Projects', icon: 'https://poi.apache.org/images/logo-square.png' },
      { name: 'JSF Projects', icon: iconUrl('java') },
      { name: 'JSTL Projects', icon: iconUrl('java') },
      { name: 'Java Mail Projects', icon: iconUrl('java') },
    ]
  },
];
