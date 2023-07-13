import React from "react";
import { dardan } from "assets/data/data";
import { BsSteam } from "react-icons/bs";
import { SiFaceit } from "react-icons/si";

const Dardan = () => {
  const mode = localStorage.getItem("mode");
  return (
    <div className="flex justify-start flex-wrap gap-5 mb-5">
      {dardan?.map((item) => (
        <div
          id="admin_bg"
          className={`bg-white p-5 w-[100%] h-[100%] lg:w-[340px] md:w-[340px]`}
        >
          <h1 className="text-gray font-[800] text-3xl mb-3">
            {item.mainTitle}
          </h1>
          {item.section?.map((sect) => (
            <>
              <h1 className="text-gray font-[800]">{sect.title}</h1>
              {sect.points?.map((pnt) => (
                <ul className="ml-3">
                  <li>- {pnt.feild}</li>
                </ul>
              ))}
            </>
          ))}
        </div>
      ))}
      <div className="flex flex-col gap-5">
        <div
          id="admin_bg"
          className={`bg-white p-5 w-[100%] lg:w-[400px] md:w-[400px]`}
        >
          <div className="flex gap-5 items-center">
            <BsSteam
              size={50}
              color={mode === "dark" ? "#284994" : "#091a41"}
            />
            <div>
              <p className="text-gray font-[800]">
                Username:{" "}
                <span className="text-gray font-[500]">dardan_ll</span>
              </p>
              <p className="text-gray font-[800]">
                Password:{" "}
                <span className="text-gray font-[500]">Dardan2018</span>
              </p>
            </div>
          </div>
        </div>
        <div
          id="admin_bg"
          className={`bg-white p-5 w-[100%] lg:w-[400px] md:w-[400px] `}
        >
          <div className="flex gap-5 items-center">
            <SiFaceit size={50} color="#ff6e28" />
            <div>
              <p className="text-gray font-[800]">
                Email:
                <span className="text-gray font-[500]">
                  dardangamingswag@gmail.com
                </span>
              </p>
              <p className="text-gray font-[800]">
                Password:
                <span className="text-gray font-[500]"> Dardan2018@</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dardan;
