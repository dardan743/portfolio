import { SIDEBAR_TOGGLE } from "constants/constants";

const initialState = {
  toggle: false,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_TOGGLE:
      return {
        ...state,
        toggle: action.payload,
      };

    default:
      return state;
  }
};

export default sidebarReducer;
