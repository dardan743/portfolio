import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import MovieX from "../images/portfolio/moviex.png";
import Pizza from "../images/portfolio/pizza.png";
import Dashboard from "../images/portfolio/dashboard.png";
import albania from "assets/flags/al.png";
import en from "assets/flags/uk.jpg";

// Project To add
// https://github.com/dardan743/RentACar
// https://github.com/dardan743/Capital-Ria-POS
// https://github.com/dardan743/ecommerce-diploma
// https://github.com/dardan743/Gymate
// https://github.com/dardan743/real-estate-ui
// https://github.com/dardan743/TMovies
// https://github.com/dardan743/Google-clone-NextJs

export const projects = [
  {
    id: "1",
    image: MovieX,
    images: [
      {
        url: portfolioImg01,
      },
      {
        url: portfolioImg02,
      },
      {
        url: portfolioImg03,
      },
      {
        url: portfolioImg04,
      },
    ],
    category: "Web App",
    title: "-MovieX-",
    description:
      "MoviesX is a application where you can find the newest movies & tv series and watch there trailer, soon to be able to watch all movies full HD!",
    technologies: [
      "React",
      "Redux",
      "Styled Components",
      "SASS",
      "Swiper",
      "TMDB API",
    ],
    siteUrl: "https://moviegj.netlify.app",
  },
  {
    id: "2",
    image: portfolioImg01,
    category: "Ux",
    title: "Multimedia Sharing Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["Adobe XD", "Photoshop", "Illustrator"],
    siteUrl: "#",
  },
  {
    id: "3",
    image: Pizza,
    category: "Web App",
    title: "-PizzaBot-",
    description: "Pizza online ordering landing page!",
    technologies: ["React", "Styled Components", "SASS"],
    siteUrl: "https://pizzawb-d.netlify.app",
  },
  {
    id: "4",
    image: Pizza,
    category: "Mobile App",
    title: "-Mobile-",
    description: "Pizza online ordering landing page!",
    technologies: ["React", "Styled Components", "SASS"],
    siteUrl: "https://pizzawb-d.netlify.app",
  },
  {
    id: "5",
    image: Dashboard,
    category: "Web App",
    title: "-Admin Dashboard-",
    description: "Admin Dashboard UI Template",
    technologies: ["React", "SASS", "Redux"],
    siteUrl: "https://admin-dashbaord-dll.netlify.app",
  },
];

export const languages = [
  {
    id: "en",
    title: "EN",
    country: "English",
    flag: en,
  },
  {
    id: "sq",
    title: "SQ",
    country: "Albanian",
    flag: albania,
  },
];

export const colors = [
  {
    id: "red",
    color: "#FF4141",
    theme: "Red",
  },
  {
    id: "green",
    color: "#39AD78",
    theme: "Green",
  },
  {
    id: "orange",
    color: "#ffaa00",
    theme: "Orange",
  },
];
