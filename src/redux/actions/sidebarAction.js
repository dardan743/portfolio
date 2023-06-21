import { SIDEBAR_TOGGLE } from "constants/constants";

export const toggleSidebar = (toggle) => {
  return {
    type: SIDEBAR_TOGGLE,
    payload: toggle,
  };
};
