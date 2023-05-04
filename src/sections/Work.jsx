import React from "react";
import digitize from "assets/images/work/digitize.png";
import vizion from "assets/images/work/vizion.png";
import design from "assets/images/work/design.png";

const data = [
  {
    position: "React JS Developer",
    img: digitize,
    company: "Digitize LLC",
    time: "August 2021, Present",
    location: "Prishtine, Kosovo",
    responsibilities: [
      {
        name: "Developing and maintaining web applications using React JS and other related technologies",
      },
      {
        name: "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products",
      },
      {
        name: "Implementing responsive design and ensuring cross-browser compatibility",
      },
      {
        name: "Participating in code reviews, trouble shooting and providing constructive feedback to other developers",
      },
    ],
    type: "left",
  },
  {
    position: "React Native & Javascript Developer",
    img: vizion,
    company: "Vizion Agency LLC",
    time: "Febuary 2020 To July 2021",
    location: "Prishtine, Kosovo",
    responsibilities: [
      {
        name: "Developing and maintaining mobile applications using React Native and other related technologies",
      },
      {
        name: "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products",
      },
      {
        name: "Implementing responsive design and ensuring cross-browser compatibility",
      },
      {
        name: "Participating in code reviews and providing constructive feedback to other developers",
      },
    ],
    type: "right",
  },
  {
    position: "UI / UX Designer",
    img: design,
    company: "Freelance",
    time: "March 2019 To April 2020",
    location: "Everywhere",
    responsibilities: [
      {
        name: "Developing concepts, graphics and layouts, including making decisions about fonts, images, readability and readers needs",
      },
      {
        name: "Determining size and arrangement of copy and illustrative material, as well as font style and size",
      },
      {
        name: "Keeping clients up to date, listening to and acting on feedback, and explaining the rationale behind graphic design decisions",
      },
      {
        name: "reviewing final layouts and suggesting improvements if required",
      },
      {
        name: "keeping up to date with design and software trends",
      },
    ],
    type: "left",
  },
];

const Left = ({ img, company, position, time, location, responsibilities }) => (
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
            <h3 className="text-primaryColor font-[800] mb-3 group-hover:text-white group-hover:font-[800] text-xl sm:mt-10">
              {position}
            </h3>
            <p className="text-smallTextColor font-[700] mb-3 group-hover:text-white group-hover:font-[700]">
              {company} - {time} <br />
              {location}
            </p>

            {responsibilities?.map((item) => {
              return (
                <li className="pl-2 text-smallTextColor font-[600] mb-3 group-hover:text-white group-hover:font-[600]">
                  {item.name}
                </li>
              );
            })}
          </div>
        </div>
      </div>

      <div className="rounded-full bg-primaryColor border-white border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
        <figure>
          <img className="rounded-full" src={img} alt="" />
        </figure>
      </div>
    </div>
  </div>
);

const Right = ({
  img,
  company,
  position,
  time,
  location,
  responsibilities,
}) => (
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
            <h3 className="text-primaryColor font-[800] mb-3 group-hover:text-white group-hover:font-[800] text-xl">
              {position}
            </h3>
            <p className="text-smallTextColor font-[700] mb-3 group-hover:text-white group-hover:font-[700]">
              {company} - {time} <br />
              {location}
            </p>

            {responsibilities?.map((item) => {
              return (
                <li className="pl-2 text-smallTextColor font-[600] mb-3 group-hover:text-white group-hover:font-[600]">
                  {item.name}
                </li>
              );
            })}
          </div>
        </div>
      </div>

      <div className="rounded-full bg-primaryColor border-white border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
        <figure>
          <img className="rounded-full" src={img} alt="" />
        </figure>
      </div>
    </div>
  </div>
);

const Work = () => {
  return (
    <section id="work">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            Work Experience
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 ">
            My work experience througout the years!
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* =========== vertical line running through the middle ============ */}
              <div className="hidden absolute w-1 sm:block bg-headingColor h-full left-1/2 transform -translate-x-1/2"></div>
              {data?.map((item) =>
                item.type === "left" ? (
                  <Left
                    img={item.img}
                    position={item.position}
                    company={item.company}
                    time={item.time}
                    location={item.location}
                    responsibilities={item.responsibilities}
                  />
                ) : item.type === "right" ? (
                  <Right
                    img={item.img}
                    position={item.position}
                    company={item.company}
                    time={item.time}
                    location={item.location}
                    responsibilities={item.responsibilities}
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

export default Work;
