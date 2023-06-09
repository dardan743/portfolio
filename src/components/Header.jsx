import React, { useRef, useEffect, useState } from "react";
// import { Player } from "components";
// import Song from "assets/amors.mp3";
import i18next from "i18next";
import { languages } from "assets/data/data";
import { BsInfoLg } from "react-icons/bs";
import ExtraModal from "components/custom/ExtraModel";

const Header = ({ t }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const selected = localStorage.getItem("i18nextLng");
  const currentLanguage = languages.find((lng) => lng?.id === selected);
  const changeLanguage = (e) => i18next.changeLanguage(e.target.value);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, []);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <>
      <header
        ref={headerRef}
        className="w-full h-[80px] leading-[80px] flex items-center"
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* ============= logo=========== */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center ">
                D
              </span>

              <div className="leading-[20px]">
                <h2 className="text-xl text-smallTextColor font-[700]">
                  Dardan
                </h2>
                <p className="text-smallTextColor text-[14px] font-[500]">
                  Llapashtica
                </p>
              </div>
            </div>

            {/* =========== logo end ============== */}
            {/* =========== menu start =============== */}
            <div className="menu" ref={menuRef} onClick={toggleMenu}>
              <ul className="flex items-center gap-10">
                <li>
                  <a
                    onClick={handleClick}
                    className="text-smallTextColor font-[600]"
                    href="#about"
                  >
                    {t("about")}
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    className="text-smallTextColor font-[600]"
                    href="#skills"
                  >
                    {t("skills")}
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    className="text-smallTextColor font-[600]"
                    href="#services"
                  >
                    {t("services")}
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    className="text-smallTextColor font-[600]"
                    href="#work"
                  >
                    {t("work")}
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    className="text-smallTextColor font-[600]"
                    href="#portfolio"
                  >
                    {t("projects")}
                  </a>
                </li>
                {/* <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#testimonials"
                >
                  {t("testimonials")}
                </a>
              </li> */}
                <li>
                  <a
                    onClick={handleClick}
                    className="text-smallTextColor font-[600]"
                    href="#contact"
                  >
                    {t("contact")}
                  </a>
                </li>
              </ul>
            </div>
            {/* =========== menu end =============== */}

            {/* ========= menu right ========== */}
            <div className="flex items-center gap-4">
              {/* <Player url={Song} /> */}
              <select
                className="text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-1 rounded-[8px] hover:bg-smallTextColor hover:text-white hover:font-[600] ease-in duration-300"
                onChange={(e) => changeLanguage(e)}
              >
                {languages.map((lang) => (
                  <option
                    selected={currentLanguage?.id === lang?.id}
                    value={lang?.id}
                  >
                    {lang?.country}
                  </option>
                ))}
              </select>
              <button
                onClick={() => setShowModal(true)}
                className="text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-1 rounded-[8px] hover:bg-smallTextColor hover:text-white hover:font-[600] ease-in duration-300"
              >
                <BsInfoLg size={23} />
              </button>

              <span
                onClick={toggleMenu}
                className="text-2xl text-smallTextColor md:hidden cursor-pointer"
              >
                <i className="ri-menu-line"></i>
              </span>
            </div>
            {/* ========= menu end ========== */}
          </div>
        </div>
      </header>
      {showModal && <ExtraModal setShowModal={setShowModal} />}
    </>
  );
};

export default Header;
