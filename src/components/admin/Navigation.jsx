import { Fragment, useState } from "react";
import { RiMenuUnfoldFill, RiMenuFoldLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "redux/actions/sidebarAction";
import Avatar from "@mui/material/Avatar";
import me from "assets/images/kk.png";
// import aurora from "assets/images/aurora.jpg";
import { Dialog, Transition } from "@headlessui/react";
import { useThemeSwitcher } from "hooks";
import { changeKeyword } from "redux/actions/keywordAction";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import AvatarGroup from "@mui/material/AvatarGroup";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    width: 10,
    height: 10,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Navigation = () => {
  const dispatch = useDispatch();
  const ToggleView = useThemeSwitcher();
  const sidebar_toggle = useSelector((state) => state.sidebarState.toggle);
  const keyword = useSelector((state) => state.keywordState.keyword);
  const [enabled, setEnabled] = useState(false);

  const onChangeSwicth = () => {
    if (enabled === true) {
      setEnabled(false);
      dispatch(changeKeyword(""));
    } else {
      setEnabled(true);
      dispatch(changeKeyword("swag"));
    }
  };

  let [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="dashboard_navigation">
        <div className="flex items-center">
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
          {/* <p className="capitalize">
            {window.location.pathname.split("/")?.[1]}
          </p> */}

          {/* <div className="flex flex-row gap-5"> */}
          <AvatarGroup max={4}>
            {enabled ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  className="cursor-pointer"
                  alt="DLL"
                  src={me}
                  onClick={onChangeSwicth}
                />
              </StyledBadge>
            ) : (
              <Avatar
                alt="DLL"
                src={me}
                onClick={onChangeSwicth}
                className="cursor-pointer"
              />
            )}
          </AvatarGroup>

          {/* </div> */}
        </div>
        <div className="dashboard_navigation_icons">
          {/* <Player url={Song} /> */}
          {ToggleView}
          <p>Swag</p>
          <Avatar
            alt="DLL"
            src={me}
            onClick={openModal}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-center font-medium leading-6 text-gray-900"
                  >
                    Your Magic Word
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-5xl text-center text-primaryColor">
                      {keyword}
                    </p>
                  </div>

                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-primaryColor px-4 py-2 text-sm font-medium text-white hover:primaryColor focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Submit
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Navigation;
