import React from "react";
import { aurora } from "assets/data/data";

const Aurora = () => {
  return (
    <div className="flex justify-start flex-wrap gap-4 mb-5">
      {aurora?.map((item) => (
        <div
          id="admin_bg"
          className={`bg-white p-5 w-[100%] h-[100%] lg:w-[350px] md:w-[350px] lg:h-[395px] md:h-[395px] overflow-y-scroll`}
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
