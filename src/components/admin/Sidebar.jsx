import React from "react";
import { NavLink } from "react-router-dom";
import Tooltip from "components/custom/Tooltip";
import { useSelector } from "react-redux";
import { sidebarLinks } from "assets/data/data";

const AdminSidebar = () => {
  const sidebar_toggle = useSelector((state) => state.sidebarState.toggle);
  return (
    <div className={sidebar_toggle ? "admin_sidebar_none" : `admin_sidebar`}>
      <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center logo-img">
        D
      </span>

      {sidebarLinks.map((link, i) => {
        return (
          <div className="admin_sidebar_content" key={i}>
            <p className="menu_title">{link.title}</p>
            {link.children.map((item) => (
              <div className="admin_sidebar_menu" key={item.id}>
                <Tooltip
                  title={item.link}
                  placement="right"
                  disableHoverListener={!sidebar_toggle}
                >
                  <NavLink
                    to={item.url}
                    activeClassName="adminActiveLink"
                    className="sidebar_link"
                  >
                    <div className="flexed_div">
                      {item.img && (
                        <img
                          src={item.img}
                          alt=""
                          style={{
                            display: "block",
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                          }}
                        />
                      )}
                      {item.icon && item.icon}
                      <span>{item.link}</span>
                    </div>
                  </NavLink>
                </Tooltip>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default AdminSidebar;
