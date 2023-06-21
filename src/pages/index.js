import { lazy } from "react";

export const HOME = lazy(() => import("./Home"));
export const CSGO = lazy(() => import("./CSGO"));
export const DASHBOARD = lazy(() => import("./Dashbaord"));
export const LOADER = lazy(() => import("../components/Loader"));
