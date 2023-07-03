import { Fragment, useState } from "react";
import { RiMenuUnfoldFill, RiMenuFoldLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "redux/actions/sidebarAction";
import Avatar from "@mui/material/Avatar";
import me from "assets/images/kk.png";
import { Dialog, Transition } from "@headlessui/react";
// import secureLocalStorage from "react-secure-storage";

const Navigation = () => {
  const dispatch = useDispatch();
  const sidebar_toggle = useSelector((state) => state.sidebarState.toggle);
  const [keyword, setKeyword] = useState("");

  let [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const obj = JSON.parse(localStorage.getItem("magic_word"));

  const phrase = {
    magic: keyword,
    img: me,
    fullName: "Dardan LLapashtica",
  };

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
          <p className="capitalize">
            {window.location.pathname.split("/")?.[1]}
          </p>
        </div>
        MAGIC WORD ON: {obj?.magic === "Dardan" ? "YES" : "NO"}
        <div className="dashboard_navigation_icons">
          {/* <Player url={Song} /> */}
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
                  {obj.magic !== null && (
                    <>
                      <Dialog.Title
                        as="h3"
                        className="text-lg text-center font-medium leading-6 text-gray-900"
                      >
                        Your Magic Word
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-5xl text-center text-primaryColor">
                          Dardan
                        </p>
                      </div>
                    </>
                  )}

                  {obj.magic === null && (
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Magic Word
                    </Dialog.Title>
                  )}

                  {obj.magic === null && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Use your magic key to unlock ur information!
                      </p>
                    </div>
                  )}
                  {obj.magic === null && (
                    <input
                      className="border-2 border-[#eee] p-2 w-[100%] rounded-2xl mt-2"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      placeholder="Magic Word"
                      // readOnly={obj.magic !== null ? true : false}
                      // disabled={obj.magic !== "" ? true : false}
                    />
                  )}

                  {obj.magic === null && (
                    <div className="mt-4">
                      <button
                        disabled={keyword.length > 4 ? false : true}
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-primaryColor px-4 py-2 text-sm font-medium text-white hover:primaryColor focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => {
                          localStorage.setItem(
                            "magic_word",
                            JSON.stringify(phrase)
                          );
                          setIsOpen(false);
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  )}
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
