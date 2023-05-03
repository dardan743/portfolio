import React from "react";
import frontendImg from "assets/images/front-end.png";
import backendImg from "assets/images/backend.png";
import uiImg from "assets/images/design.png";
import appsImg from "assets/images/apps.png";
import mobileImg from "assets/images/mobile.png";
import { FcApproval } from "react-icons/fc";

const data = [
  {
    title: "Frontend Development",
    img: frontendImg,
    skills: [
      {
        name: "Html",
      },
      {
        name: "CSS",
      },
      {
        name: "SCSS(SASS)",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "JavaScript",
      },
      {
        name: "ReactJS",
      },
      {
        name: "React Redux",
      },

      {
        name: "AngularJS",
      },
      {
        name: "NextJS",
      },
      {
        name: "WordPress",
      },
    ],
    type: "left",
  },
  {
    title: "Backend Development",
    img: backendImg,
    skills: [
      {
        name: "Node Js",
      },
      {
        name: "Firebase",
      },
    ],
    type: "right",
  },
  {
    title: "UI/UX Design",
    img: uiImg,
    skills: [
      {
        name: "Adobe XD",
      },
      {
        name: "Figma",
      },
      {
        name: "PhotoShop",
      },
    ],
    type: "left",
  },
  {
    title: "Mobile Development",
    img: mobileImg,
    skills: [
      {
        name: "React Native",
      },
      {
        name: "Expo",
      },
    ],
    type: "right",
  },
  {
    title: "Extras",
    img: appsImg,
    skills: [
      {
        name: "GIT",
      },
      {
        name: "Rest APIs",
      },
      {
        name: "GraphQL",
      },
      {
        name: "Json Server",
      },
      {
        name: "Deploys (Web & Mobile - X Platforms)",
      },
    ],
    type: "left",
  },
];

const Skill = (props) => (
  <p
    className="group-hover:text-white group-hover:font-[600]"
    style={{
      display: "flex",
      gap: 10,
      alignItems: "center",
    }}
  >
    <FcApproval size={20} /> {props.skill}
  </p>
);

const Left = ({ img, skillName, skills }) => (
  <div className="mt-6 sm:mt-0 sm:mb-12">
    <div className="flex items-center flex-col sm:flex-row">
      <div className={`flex justify-start w-full mx-auto items-center`}>
        <div className={`w-full sm:w-1/2 sm:pr-8`}>
          <div
            data-aos={`fade-right`}
            data-aos-delay="100"
            data-aos-duration="1400"
            className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
          >
            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
              {skillName}
            </h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 30,
              }}
            >
              {skills?.map((item) => (
                <Skill skill={item.name} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
        <figure>
          <img src={img} alt="" />
        </figure>
      </div>
    </div>
  </div>
);

const Right = ({ img, skillName, skills }) => (
  <div className="mt-6 sm:mt-0 sm:mb-12">
    <div className="flex items-center flex-col sm:flex-row">
      <div className={`flex justify-end w-full mx-auto items-center`}>
        <div className={`w-full sm:w-1/2 sm:pl-8`}>
          <div
            data-aos={`fade-left`}
            data-aos-delay="100"
            data-aos-duration="1400"
            className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
          >
            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
              {skillName}
            </h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 30,
              }}
            >
              {skills?.map((item) => (
                <Skill skill={item.name} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
        <figure>
          <img src={img} alt="" />
        </figure>
      </div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            Skills
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 ">
            My Programming Language Proficiency!
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* =========== vertical line running through the middle ============ */}
              <div className="hidden absolute w-1 sm:block bg-headingColor h-full left-1/2 transform -translate-x-1/2"></div>
              {data?.map((item) =>
                item.type === "left" ? (
                  <Left
                    skillName={item.title}
                    skills={item.skills}
                    img={item.img}
                  />
                ) : item.type === "right" ? (
                  <Right
                    skillName={item.title}
                    skills={item.skills}
                    img={item.img}
                  />
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
