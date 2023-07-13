import { CHANGE_KEYWORD } from "constants/constants";

export const changeKeyword = (keyword) => {
  return {
    type: CHANGE_KEYWORD,
    payload: keyword,
  };
};
