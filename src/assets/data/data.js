// MovieX
import MovieX from "../images/portfolio/movie/moviex.png";
import MovieXFull from "../images/portfolio/movie/moviex-full.png";
import MovieXFull1 from "../images/portfolio/movie/moviex-full1.png";

//Rent a Car
import CarRentalFull from "../images/portfolio/rent/car-rental-full.webp";
import CarRentalImg from "../images/portfolio/rent/rent_car_img.png";

//Rent a Car
import RealtateImg from "../images/portfolio/estate/real_estate.png";
import RealtateHome from "../images/portfolio/estate/home.png";
import RealtateDetails from "../images/portfolio/estate/details.png";

// Gymate
import GyMate from "../images/portfolio/gym/gymate.png";
import GyMateFull from "../images/portfolio/gym/gymate-full.webp";
//Pizza
import Pizza from "../images/portfolio/pizza/pizza.png";
import PizzaFull from "../images/portfolio/pizza/pizza-full.png";
// Biomedica
import Biomedica from "../images/portfolio/biomedica/biomedica.png";
import BiomedicaHomeFull from "../images/portfolio/biomedica/biomedica-home.png";
import BiomedicaProductsFull from "../images/portfolio/biomedica/biomedica-products.png";
// Google NextJS
import Google from "../images/portfolio/google/google.png";
import GoogleFull from "../images/portfolio/google/google-full.png";
// Capital Ria
import CaptaiLogo from "../images/portfolio/capitalRia/logo.png";
import POSLogin from "../images/portfolio/capitalRia/POS/ria_signin.jpg";
import POSSignUp from "../images/portfolio/capitalRia/POS/ria_signup.jpg";
import POSOtp from "../images/portfolio/capitalRia/POS/ria_otp.jpg";
import POSTransactions from "../images/portfolio/capitalRia/POS/ria_pos_transactions.jpg";
//Mobile
import Shared from "../images/portfolio/mobile/shared.png";
import SharedQR from "../images/portfolio/mobile/shared_qr.png";
import Lafee from "../images/portfolio/mobile/lafee.png";
// import dashboard from "../images/portfolio/mobile/dashboard.jpg";
// import jobs from "../images/portfolio/mobile/jobs.jpg";
// import addCleint from "../images/portfolio/mobile/add_client.jpg";
// import login from "../images/portfolio/mobile/login.jpg";

// Flags
import albania from "assets/flags/al.png";
import en from "assets/flags/uk.jpg";

// Web
// Add Capital BackOffice, Web Client, SZR
// https://github.com/dardan743/ecommerce-diploma
// https://github.com/dardan743/react-dashboard-template

// Mobile
// https://github.com/dardan743/Chat-App

const category = {
  all: "all",
  web: "WEB",
  design: "UIUX",
  mobile: "MOBILE",
};

const bgColor = {
  red: "#FF4141",
  pink: "#fec8e0",
  lightPurple: "#aaa7ee",
  purple: "#2d3246",
  darkPurple: "#100643",
  yellow: "#ffb72d",
  lightBlue: "#1fa7cc",
  green: "#4edcb0",
  orange: "#c87f25",
  bioColor: "#0bb3a2",
  estate: "#6d28d9",
  capital: "#ff680d",
  black: "#252525",
  shared: "#32de84",
  lafee: "#e90df5",
};

export const projects = [
  {
    id: 1,
    image: Biomedica,
    images: [
      {
        url: BiomedicaHomeFull,
        px: "-300px",
      },
      {
        url: BiomedicaProductsFull,
        px: "-300px",
      },
    ],
    color: bgColor.bioColor,
    category: category.web,
    title: "-Biomedica-",
    description:
      "Biomedica is a web application for an Austrian medical company which provides more than 3 million products.",
    technologies: [
      "React",
      "Redux",
      "SASS",
      "Local Storage",
      "Rest APIs",
      "GraphQL",
      "Jquery",
      "CMS",
    ],
    siteUrl: "https://www.bmgrp.eu",
  },
  {
    id: 2,
    image: MovieX,
    images: [
      {
        url: MovieXFull,
      },
      {
        url: MovieXFull1,
      },
    ],
    color: bgColor.lightBlue,
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
    id: 3,
    image: CarRentalImg,
    images: [
      {
        url: CarRentalFull,
      },
      {
        url: CarRentalFull,
      },
    ],
    color: bgColor.red,
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
    siteUrl: "https://stefantopalovicdev.vercel.app",
  },
  {
    id: 4,
    image: GyMate,
    images: [
      {
        url: GyMateFull,
      },
    ],
    color: bgColor.purple,
    category: category.web,
    title: "-GYMate-",
    description:
      "A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals!",
    technologies: ["React", "SASS", "Local Storage"],
    siteUrl: "https://gymate-iota.vercel.app",
  },
  {
    id: 5,
    image: Pizza,
    images: [
      {
        url: PizzaFull,
      },
    ],
    color: bgColor.orange,
    category: category.web,
    title: "-PizzaBot-",
    description: "Pizza online ordering landing page!",
    technologies: ["React", "Styled Components", "SASS"],
    siteUrl: "https://pizzawb-d.netlify.app",
  },
  {
    id: 6,
    image: RealtateImg,
    images: [
      {
        url: RealtateHome,
      },
      {
        url: RealtateDetails,
      },
    ],
    color: bgColor.estate,
    category: category.web,
    title: "-Real Estate-",
    description: "Real Estate UI!",
    technologies: ["React", "Tailwind CSS", "React-Context"],
    siteUrl: "https://real-estate-dll.netlify.app",
  },
  {
    id: 7,
    image: Google,
    images: [
      {
        url: GoogleFull,
      },
    ],
    color: bgColor.lightPurple,
    category: category.web,
    title: "-Google Clone-",
    description: "Google search engine clone!",
    technologies: ["React", "NextJS", "Rest APIs", "SASS"],
    siteUrl: "https://google-ish.vercel.app",
  },
  {
    id: 8,
    image: CaptaiLogo,
    images: [
      {
        url: POSLogin,
      },
      {
        url: POSSignUp,
      },
      {
        url: POSOtp,
      },
      {
        url: POSTransactions,
      },
    ],
    color: bgColor.capital,
    category: category.mobile,
    title: "-Capital Ria POS-",
    description: "Capital Ria POS Moboile App!",
    technologies: [
      "React Native",
      "Expo",
      "Redux",
      "Rest APIs",
      "React-Navigation",
    ],
    siteUrl:
      "https://expo.dev/@swag_mf/capital-pos?serviceType=classic&distribution=expo-go",
  },
  {
    id: 9,
    image: Shared,
    images: [
      {
        url: SharedQR,
      },
    ],
    color: bgColor.black,

    category: category.mobile,
    title: "-Shared Element Transition-",
    description: "Shared element transition using react native!",
    technologies: ["React Native", "Expo", "React-native-shared-element"],
    siteUrl: "",
  },
  {
    id: 10,
    image: Lafee,
    images: [
      {
        url: Lafee,
      },
    ],
    color: bgColor.lafee,
    category: category.mobile,
    title: "-L`a Fee-",
    description:
      "L`a Fee is a managment system for a small company in France, they use it to manage the workers of the company and finances!",
    technologies: [
      "React Native",
      "Expo",
      "EAS Deploy & Cli",
      "Async Storage",
      "Digital Signature",
    ],
    siteUrl:
      "https://expo.dev/@swag_mf/la-fee-du-logis?serviceType=classic&distribution=expo-go",
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
