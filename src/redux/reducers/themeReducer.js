import { CHANGE_THEME } from "../../constants";

const initialState = {
  theme: localStorage.getItem("appTheme"),
  selected: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        color: action.payload,
        selected: true,
      };

    default:
      return state;
  }
};

export default themeReducer;
