import React from "react";
import heroImg from "assets/images/dardan.png";
import resume from "assets/cv.pdf";
import CountUp from "react-countup";

const Hero = ({ t }) => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* ========= hero left content ========= */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              {t("hello")} {t("welcome")},
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5 "
            >
              I'm Dardan Llapashtica <br />
              {t("dev")}
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i className="ri-mail-line"></i> {t("hire")}
                </button>
              </a>
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                {t("see_cv")}
              </a>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pr-10"
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              {t("about_me")}
            </p>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                {t("follow")}:
              </span>
              <span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/dardan_llapashtica/"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/dardan743"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/dardan.llapashtica.16/"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/dardan-llapashtica/"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
            </div>
          </div>
          {/* ========= hero left end ========= */}
          {/* ========= hero img ===========*/}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="" className="rounded-full" />
            </figure>
          </div>
          {/* ========= hero img  end ===========*/}
          {/* ========= hero content  right ===========*/}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-primaryColor font-[700] text-[32px]">
                <CountUp start={0} end={3} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                {t("years")}:
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-primaryColor font-[700] text-[32px]">
                <CountUp start={0} end={99} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                {t("success")}:
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-primaryColor font-[700] text-[32px]">
                <CountUp start={0} end={10} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                {t("happy_clients")}:
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-primaryColor font-[700] text-[32px]">
                <CountUp start={0} end={8} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                {t("completed")}:
              </h4>
            </div>
          </div>
          {/* =========  hero content  right end ===========*/}
        </div>
      </div>
    </section>
  );
};

export default Hero;
