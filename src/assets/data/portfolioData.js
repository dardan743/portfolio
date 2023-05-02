import portfolioImg01 from "../images/portfolio-01.jpg";
import MovieX from "../images/portfolio/moviex.png";
import Pizza from "../images/portfolio/pizza.png";

const portfolios = [
  {
    id: "1",
    imgUrl: MovieX,
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
    imgUrl: portfolioImg01,
    category: "Ux",
    title: "Multimedia Sharing Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["Adobe XD", "Photoshop", "Illustrator"],
    siteUrl: "#",
  },
  {
    id: "3",
    imgUrl: Pizza,
    category: "Web App",
    title: "-PizzaBot-",
    description: "Pizza online ordering landing page!",
    technologies: ["React", "Styled Components", "SASS"],
    siteUrl: "https://pizzawb-d.netlify.app",
  },
];

export default portfolios;
