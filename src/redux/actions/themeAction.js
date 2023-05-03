import { CHANGE_THEME } from "../../constants";

export const changeTheme = (theme) => {
  return {
    type: CHANGE_THEME,
    payload: theme,
  };
};
