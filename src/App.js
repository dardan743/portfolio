import { Switch, Route, Redirect } from "react-router-dom";
import { useAnimationOnScroll, useScrollTop } from "hooks";
import * as PAGES from "pages";
import * as ROUTES from "constants/routes";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import DashboardRoute from "./DashboardRoute";

function App() {
  useAnimationOnScroll();
  useScrollTop();
  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={ROUTES.HOME} component={PAGES.HOME} />
        <DashboardRoute exact path={ROUTES.CSGO} component={PAGES.CSGO} />
        <DashboardRoute
          exact
          path={ROUTES.DASHBOARD}
          component={PAGES.DASHBOARD}
        />
        <DashboardRoute exact path={ROUTES.AURORA} component={PAGES.AURORA} />
        <DashboardRoute exact path={ROUTES.AURORA} component={PAGES.AURORA} />
        <DashboardRoute exact path={ROUTES.DARDAN} component={PAGES.DARDAN} />
        <Route exact path={ROUTES.LOADER} component={PAGES.LOADER} />
        <Redirect path="*" from="/" to={ROUTES.HOME} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
