// MovieX
import MovieX from "../images/portfolio/moviex.png";
import MovieXFull from "../images/portfolio/moviex-full.png";
import MovieXFull1 from "../images/portfolio/moviex-full1.png";

//Rent a Car
import CarRentalFull from "../images/portfolio/car-rental-full.webp";
import CarRentalImg from "../images/portfolio/rent_car_img.png";

// Gymate
import GyMate from "../images/portfolio/gymate.png";
import GyMateFull from "../images/portfolio/gymate-full.webp";
//Pizza
import Pizza from "../images/portfolio/pizza.png";
import PizzaFull from "../images/portfolio/pizza-full.png";
import albania from "assets/flags/al.png";
import en from "assets/flags/uk.jpg";

// Project To add
// https://github.com/dardan743/Capital-Ria-POS
// https://github.com/dardan743/ecommerce-diploma
// https://github.com/dardan743/real-estate-ui
// https://github.com/dardan743/Google-clone-NextJs

const category = {
  all: "all",
  web: "Web App",
  design: "Ux",
  mobile: "Mobile App",
};

export const projects = [
  {
    id: 1,
    image: MovieX,
    images: [
      {
        url: MovieXFull,
        px: "-890px",
      },
      {
        url: MovieXFull1,
        px: "-385px",
      },
    ],
    category: category.web,
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
    id: 2,
    image: CarRentalImg,
    images: [
      {
        url: CarRentalFull,
      },
      {
        url: CarRentalFull,
      },
    ],
    category: category.web,
    title: "-Rent a Car-",
    description:
      "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars!",
    technologies: [
      "React",
      "Redux",
      "Local Storage",
      "SASS",
      "Node Js",
      "Express",
      "MongoDB",
      "ENV",
      "YML",
      "Docker",
    ],
    siteUrl: "https://gymate-iota.vercel.app/",
  },
  {
    id: 3,
    image: GyMate,
    images: [
      {
        url: GyMateFull,
      },
    ],
    category: category.web,
    title: "-GYMate-",
    description:
      "A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals!",
    technologies: ["React", "SASS", "Local Storage"],
    siteUrl: "https://gymate-iota.vercel.app/",
  },
  {
    id: 4,
    image: Pizza,
    scrollImg: PizzaFull,
    images: [],
    category: category.web,
    title: "-PizzaBot-",
    description: "Pizza online ordering landing page!",
    technologies: ["React", "Styled Components", "SASS"],
    siteUrl: "https://pizzawb-d.netlify.app",
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
