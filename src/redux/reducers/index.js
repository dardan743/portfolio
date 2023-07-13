import themeReducer from "./themeReducer";
import sidebarReducer from "./sidebarReducer";
import keywordReducer from "./keywordReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const save = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  appTheme: themeReducer,
  sidebarState: sidebarReducer,
  keywordState: keywordReducer,
});

export default persistReducer(save, rootReducer);
