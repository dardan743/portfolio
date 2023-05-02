import React from "react";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineClipboardList } from "react-icons/hi";
import { SiParitysubstrate } from "react-icons/si";

const data = [
  {
    icon: <CgWebsite />,
    title: "Web Design and Development",
    description:
      "Starting from single page landing sites to e-commerce sites, I help you visualize what you think, in the form of full-fledged websites and design prototypes.",
  },
  {
    icon: <HiOutlineClipboardList />,
    title: "Targeted, Results Providing Sites",
    description:
      "With years of experience and extensive market research, the sites I build are targeted and user-oriented websites, that'll increase your overall conversion rate.",
  },
  {
    icon: <SiParitysubstrate />,
    title: "Copywriting and Online Strategies",
    description:
      "A good copy does what thousands of better designs can't. That, along with other strategies like SEO, AdSense, Analytics etc. can take you far - in the long run.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            Services
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 ">
            What do i do?
          </p>
        </div>
        <div className="services_items flex items-center justify-between flex-wrap sm:py-12 ">
          {data?.map((props, i) => {
            return (
              <div
                className="item"
                key={i}
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
              >
                <div className="icon">{props.icon}</div>
                <h6 className="text-primaryColor text-[1.5rem] font-[700]">
                  {props.title}
                </h6>
                <p className="text-headingColor text-[1.05rem] font-[500]">
                  {props.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
