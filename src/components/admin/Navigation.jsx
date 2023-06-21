import React from "react";
import { RiMenuUnfoldFill, RiMenuFoldLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "redux/actions/sidebarAction";
// import Song from "assets/amors.mp3";

const Navigation = () => {
  const dispatch = useDispatch();
  const sidebar_toggle = useSelector((state) => state.sidebarState.toggle);
  return (
    <div className="dashboard_navigation">
      <button className="sidebar_toggle">
        {sidebar_toggle ? (
          <RiMenuUnfoldFill
            onClick={() => dispatch(toggleSidebar(!sidebar_toggle))}
          />
        ) : (
          <RiMenuFoldLine
            onClick={() => dispatch(toggleSidebar(!sidebar_toggle))}
          />
        )}
      </button>
      <div className="dashboard_navigation_icons">
        <p>Dardan</p>
        <IoMdNotificationsOutline />
      </div>
    </div>
  );
};

export default Navigation;
