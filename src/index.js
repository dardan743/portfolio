import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import "./styles/global.scss";
import "./styles/darkmode.scss";
import "styles/styles.scss";
import App from "./App";
import "i18n";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";
import { store, persistor } from "redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Loader } from "components";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate persistor={persistor}>
        <Suspense fallback={Loader()}>
          <App />
        </Suspense>
      </PersistGate>
    </React.StrictMode>
  </Provider>
);
