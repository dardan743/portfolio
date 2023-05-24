import React, { useState } from "react";
import { TbPingPong } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdFootball } from "react-icons/io";
import { GiBurningDot } from "react-icons/gi";
import { SiFreelancer } from "react-icons/si";
import { FaPhotoVideo, FaRunning } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import JS from "assets/certificates/js-certificate.jpg";
import REACT from "assets/certificates/react-certificate.png";

const ExtraModal = ({ setShowModal }) => {
  const [show, setShow] = useState({ react: false, js: false });
  return (
    <>
      <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
        <div className=" w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
          <button
            onClick={() => setShowModal(false)}
            className="w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer"
          >
            &times;
          </button>
          <div>
            <h1 className="text-primaryColor font-[700] text-[2.5rem] mb-3">
              More Information
            </h1>
            {/* Achievments */}
            <h2 className="text-headingColor font-[700] text-[2rem]">
              Achievments
            </h2>
            <p
              className="text-primaryColor font-[700] text-[1rem]"
              style={{ display: "flex", alignItems: "center", gap: 5 }}
            >
              <SiFreelancer /> Freelance Projects
            </p>
            <p className="ml-5">
              I'm proud of my projects that i have completed all on my own, I
              have seen that i am capable to become a independent software
              developer.
            </p>

            <h2 className="text-headingColor font-[700] text-[2rem]">
              Education
            </h2>
            <p className="text-primaryColor font-[700] text-[1rem]">
              Riinvest College - Bachelor of computer science & cloud software
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: 10 }}>
              2018 - 2021{" "}
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <IoLocationOutline />
                Prishtine
              </span>
            </p>
            {/* Certificates */}
            <h2 className="text-headingColor font-[700] text-[2rem] mt-3">
              Certificates
            </h2>
            <p
              className="text-primaryColor font-[700] text-[1rem]"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  cursor: "pointer",
                  marginLeft: 0,
                }}
                onClick={() => setShow({ react: true })}
              >
                <GiBurningDot /> Simple Learn - React JS Advanced{" "}
              </span>
              {show.react === true && (
                <MdOutlineCancel onClick={() => setShow({ react: false })} />
              )}
            </p>
            {show.react === true && <img src={REACT} alt="" />}
            <p
              className="text-primaryColor font-[700] text-[1rem]"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  cursor: "pointer",
                  marginLeft: 0,
                }}
                onClick={() => setShow({ js: true })}
              >
                <GiBurningDot /> International Javascript Institute - Certified
                Javascript Developer{" "}
              </span>
              {show.js === true && (
                <MdOutlineCancel onClick={() => setShow({ js: false })} />
              )}
            </p>
            {show.js === true && <img src={JS} alt="" />}

            {/* Passions & Hobbies */}
            <h2 className="text-headingColor font-[700] text-[2rem] mt-3">
              Passions & Hobbies
            </h2>
            <p
              className="text-primaryColor font-[700] text-[1rem]"
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <IoMdFootball /> Football
            </p>
            <p
              className="text-primaryColor font-[700] text-[1rem]"
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <TbPingPong /> Ping Pong
            </p>
            <p
              className="text-primaryColor font-[700] text-[1rem]"
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <FaPhotoVideo /> Photography
            </p>
            <p
              className="text-primaryColor font-[700] text-[1rem]"
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <FaRunning /> Running
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraModal;
