import React from "react";
import { aurora } from "assets/data/data";

const Aurora = () => {
  const mode = localStorage.getItem("mode");
  return (
    <div className="flex justify-start flex-wrap gap-5 mb-5">
      {aurora?.map((item) => (
        <div
          className={
            mode == "light"
              ? `bg-white p-5 w-[100%] h-[100%] lg:w-[340px] md:w-[340px]`
              : `bg-borderDarkColor p-5 w-[100%] h-[100%] lg:w-[340px] md:w-[340px]`
          }
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
    </div>
  );
};

export default Aurora;
