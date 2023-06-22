import React from "react";
import { dashbaord } from "assets/data/data";

const Dashbaord = () => {
  return (
    <div className="flex justify-start flex-wrap gap-5 mb-5">
      {dashbaord?.map((item) => (
        <div className="bg-white p-5 w-[100%] h-[350px] lg:h-[100%] md:h-[100%] lg:w-[340px] md:w-[340px] overflow-y-scroll overflow-x-hidden">
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

export default Dashbaord;
