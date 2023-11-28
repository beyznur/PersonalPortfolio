import {javascript,html,css,redux,mongodb,scss, reactjs,tailwind,threejs,trendyol,reminder} from "../assets"



import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },,
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "SCSS",
    icon: scss,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
 
];
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
 
];


const projects=[{
  title: "Trendyol Clone",
  desc: " A Full Stack web application. You can browse product categories, set the price range, sort prices from highest to lowest, add products to your cart, and simulate payment.",
  tech:"ReactJS - SCSS - Strapi - Redux ",
  img: trendyol,
  url:"https://github.com/beyznur/Trendyol-Clone"

},

{
  title: "Expiration Date Reminder",
  desc: "This is a university graduation project. The responsibility assigned to me is the addition, deletion, and updating of products in the database, as well as sending notifications to users based on the expiration date.",
  tech:"Java - Firebase Firestore - Firebase Auth ",
  img: reminder,
  url:"https://github.com/beyznur/Expiration-Date-Reminder/"
},

];


const frontendTechnologies = ["HTML5", "CSS3", "JavaScript", "ReactJS", "SCSS", "Tailwind", "Redux", "ThreeJS"];
const backendTechnologies = ["Node.js", "MongoDB"];
const mobileAppTechnologies = ["Java", "Firebase"];

const socialLinks = [
  { icon: faGithub, link: "https://github.com/beyznur", label: "GitHub" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/beyznur/", label: "LinkedIn" },
];


export { technologies, projects,frontendTechnologies,backendTechnologies,mobileAppTechnologies, socialLinks };
