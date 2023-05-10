import React, { useState, useEffect } from "react";
import { projects } from "assets/data/data";
import { Modal } from "components";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(projects);
  console.log("portfolios", portfolios);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(projects);
    }

    if (selectTab === "web") {
      const filteredData = projects.filter((item) => item.category === "WEB");
      setPortfolios(filteredData);
    }

    if (selectTab === "mobile") {
      const filteredData = projects.filter(
        (item) => item.category === "MOBILE"
      );
      setPortfolios(filteredData);
    }

    if (selectTab === "design") {
      const filteredData = projects.filter((item) => item.category === "UIUX");
      setPortfolios(filteredData);
    }
  }, [selectTab]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My recent projects
            </h3>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              style={{
                backgroundColor:
                  selectTab === "all" ? "#193256" : "transparent",
                color: selectTab === "all" ? "#FF4141" : "#193256",
              }}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              All
            </button>
            <button
              style={{
                backgroundColor:
                  selectTab === "web" ? "#193256" : "transparent",
                color: selectTab === "web" ? "#FF4141" : "#193256",
              }}
              onClick={() => setSelectTab("web")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              Web
            </button>
            <button
              style={{
                backgroundColor:
                  selectTab === "mobile" ? "#193256" : "transparent",
                color: selectTab === "mobile" ? "#FF4141" : "#193256",
              }}
              onClick={() => setSelectTab("mobile")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              Mobile
            </button>
            <button
              style={{
                backgroundColor:
                  selectTab === "design" ? "#193256" : "transparent",
                color: selectTab === "design" ? "#FF4141" : "#193256",
              }}
              onClick={() => setSelectTab("design")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              UI/UX
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolios.length > 0 ? (
            portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
              <div
                key={index}
                data-aos="fade-zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
              >
                <figure
                  style={{
                    background: portfolio.color,
                    padding: "6%",
                    borderRadius: 8,
                  }}
                >
                  <img className="rounded-[8px]" src={portfolio.image} alt="" />
                </figure>

                <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block rounded-[8px]">
                  <div className="w-full h-full flex items-center justify-center">
                    <button
                      onClick={() => showModalHandler(portfolio.id)}
                      className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                    >
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={{ margin: "0 auto" }}>No {selectTab} Projects</p>
          )}
        </div>
        <div className="text-center mt-6">
          {nextItems < portfolios.length && projects.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default Portfolio;
