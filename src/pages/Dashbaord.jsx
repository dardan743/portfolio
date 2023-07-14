import React, { useRef, useEffect, useState } from "react";
import { dashbaord } from "assets/data/data";

const Dashbaord = () => {
  const elRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!elRef?.current?.clientHeight) {
      return;
    }
    setHeight(elRef?.current?.clientHeight);
  }, [elRef?.current?.clientHeight]);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  console.log("DashbaordHeight", height);
  console.log("windowSize", windowSize);

  return (
    <div className="flex justify-start flex-wrap gap-5 mb-5">
      {dashbaord?.map((item, i) => (
        <div
          key={i}
          ref={elRef}
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

export default Dashbaord;
