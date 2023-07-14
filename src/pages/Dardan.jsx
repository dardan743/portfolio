import React from "react";
import { dardan } from "assets/data/data";
import { BsSteam, BsDiscord, BsSpotify, BsTwitch } from "react-icons/bs";
import { SiFaceit, SiBinance } from "react-icons/si";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { IoLogoSnapchat } from "react-icons/io";
import { useSelector } from "react-redux";

const AccountCard = ({ icon, username, email, password }) => (
  <div
    id="admin_bg"
    className={`bg-white p-5 w-[100%] lg:w-[350px] md:w-[350px]`}
  >
    <div className="flex gap-5 items-center">
      {icon}
      <div>
        {username && (
          <p className="text-gray font-[800]">
            Username: <span className="text-gray font-[500]">{username}</span>
          </p>
        )}
        {email && (
          <p className="text-gray font-[800]">
            Email: <span className="text-gray font-[500]">{email}</span>
          </p>
        )}

        <p className="text-gray font-[800]">
          Password: <span className="text-gray font-[500]">{password}</span>
        </p>
      </div>
    </div>
  </div>
);

const Dardan = () => {
  const keyword = useSelector((state) => state.keywordState.keyword);
  return (
    <>
      <div className="flex justify-start flex-wrap gap-5 mb-5">
        {dardan?.map((item, i) => (
          <div
            key={i}
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
      {keyword === "swag" && (
        <div className="flex flex-row gap-5 flex-wrap">
          <AccountCard
            icon={<BsSteam size={50} color="#284994" />}
            username="dardan_ll"
            password="Dardan2018"
          />

          <AccountCard
            icon={<SiFaceit size={50} color="#f55700" />}
            email="dardangamingswag@"
            password="Dardan2018@"
          />

          <AccountCard
            icon={<BsDiscord size={50} color="#6e85d2" />}
            email="dondondisc@gmail.com"
            password="Dardan2018"
          />

          <AccountCard
            icon={<BsSpotify size={50} color="#1dd05d" />}
            email="dllapashtica47@gmail.com"
            password="Dardan2018"
          />

          <AccountCard
            icon={<SiBinance size={50} color="#ebb42e" />}
            email="dondondisc@gmail.com"
            password="Dardan2018"
          />

          <AccountCard
            icon={<AiFillLinkedin size={50} color="#0270ad" />}
            email="dardanllapashticaa@"
            password="Dardan2018"
          />

          <AccountCard
            icon={<AiFillInstagram size={50} color="#E1306C" />}
            username="dardan_llapashtica"
            password="dardan2018"
          />

          <AccountCard
            icon={<IoLogoSnapchat size={50} color="#f7e600" />}
            username="dardan_ll1"
            password="dardan2018"
          />
          <AccountCard
            icon={<BsTwitch size={50} color="#a441f7" />}
            username="swag_ll"
            password="Dardan2018@"
          />
          <AccountCard
            icon={<AiFillFacebook size={50} color="#1773ea" />}
            email="dllapashtica47@gmail.com"
            password="Dardan2018"
          />
        </div>
      )}
      {keyword === "loli" && (
        <div className="flex flex-row gap-8 flex-wrap">
          <AccountCard
            icon={<BsSteam size={50} color="#284994" />}
            username="aurora"
            password="aurora2018"
          />
        </div>
      )}
    </>
  );
};

export default Dardan;
