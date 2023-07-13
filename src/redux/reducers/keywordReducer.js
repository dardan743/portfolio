import { CHANGE_KEYWORD } from "constants/constants";

const initialState = {
  keyword: "",
};

const keywordReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      };

    default:
      return state;
  }
};

export default keywordReducer;
