
// This data is structured to mimic what an API might return.
// Icons are placeholder URLs from a CDN that provides logos.
const iconUrl = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;
const plainIconUrl = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-plain.svg`;

export const tutorialData = [
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
    category: 'Web Technology',
    items: [
      { name: 'HTML', icon: iconUrl('html5') },
      { name: 'CSS', icon: iconUrl('css3') },
      { name: 'JavaScript', icon: iconUrl('javascript') },
      { name: 'jQuery', icon: iconUrl('jquery') },
      { name: 'jQuery UI', icon: 'https://jqueryui.com/resources/images/logo-square.png' },
      { name: 'XML', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Xml-logo-notext.svg/1024px-Xml-logo-notext.svg.png' },
      { name: 'JSON', icon: 'https://www.json.org/img/logo.svg' },
      { name: 'Bootstrap', icon: iconUrl('bootstrap') },
      { name: 'AngularJS', icon: iconUrl('angularjs') },
      { name: 'Node.js', icon: iconUrl('nodejs') },
      { name: 'Express.js', icon: iconUrl('express') },
      { name: 'Backbone', icon: iconUrl('backbonejs') },
      { name: 'Sass', icon: iconUrl('sass') },
      { name: 'Less', icon: iconUrl('less') },
    ]
  },
  {
    category: 'Trending Technology',
    items: [
      { name: 'Angular 8', icon: iconUrl('angularjs') },
      { name: 'ReactJS', icon: iconUrl('react') },
      { name: 'React Native', icon: plainIconUrl('react') },
      { name: 'Artificial Intelligence', icon: 'https://cdn-icons-png.flaticon.com/512/603/603102.png' },
      { name: 'AWS', icon: iconUrl('amazonwebservices') },
      { name: 'Selenium', icon: 'https://www.selenium.dev/images/selenium_logo_square_green.png' },
      { name: 'Cloud Computing', icon: 'https://cdn-icons-png.flaticon.com/512/2329/2329063.png' },
      { name: 'Hadoop', icon: iconUrl('hadoop') },
      { name: 'Data Science', icon: 'https://cdn-icons-png.flaticon.com/512/3593/3593526.png' },
      { name: 'Machine Learning', icon: 'https://cdn-icons-png.flaticon.com/512/346/346894.png' },
      { name: 'Azure', icon: iconUrl('azure') },
      { name: 'Google Cloud', icon: iconUrl('googlecloud') },
      { name: 'Node.js', icon: iconUrl('nodejs') },
      { name: 'Go Lang', icon: iconUrl('go') },
      { name: 'TypeScript', icon: iconUrl('typescript') },
      { name: 'GitHub', icon: iconUrl('github') },
      { name: 'Flutter', icon: iconUrl('flutter') },
    ]
  },
  {
    category: 'Database',
    items: [
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg' },
        { name: 'PL/SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
        { name: 'MySQL', icon: iconUrl('mysql') },
        { name: 'MongoDB', icon: iconUrl('mongodb') },
        { name: 'PostgreSQL', icon: iconUrl('postgresql') },
        { name: 'SQL Server', icon: iconUrl('microsoftsqlserver') },
        { name: 'Oracle', icon: iconUrl('oracle') },
        { name: 'Cassandra', icon: 'https://cassandra.apache.org/_/img/cassandra_logo.svg' },
        { name: 'SQLite', icon: iconUrl('sqlite') },
        { name: 'Neo4j', icon: 'https://neo4j.com/wp-content/uploads/2021/08/neo4j-icon-2021.png' },
        { name: 'CouchDB', icon: iconUrl('couchdb') },
        { name: 'MariaDB', icon: iconUrl('mariadb') },
        { name: 'DB2', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ibm/ibm-original.svg' },
        { name: 'Redis', icon: iconUrl('redis') },
    ]
  },
];
