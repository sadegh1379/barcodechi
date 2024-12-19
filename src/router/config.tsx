import { lazy } from "react";

const NotFoundPage = lazy(() => import("pages/not-found/not-found"));
const LoginPage = lazy(() => import("pages/login/login"));
const HomePage = lazy(() => import("pages/home/home"));

export type routesProps = {
  path: string;
  component: React.FC;
  layout: {
    type: "default" | "core-admin" | "mobile";
    showFooter?: boolean;
  };
  authType: "no-auth" | "auth";
  showFooter?: boolean;
  breadCrumbName?: string;
};

const routes: routesProps[] = [
  {
    path: "*",
    component: NotFoundPage,
    layout: {
      type: "default",
    },
    authType: "no-auth",
  },
  {
    path: "/home",
    authType: "no-auth",
    layout: {
      type: "mobile"
    },
    component: HomePage
  },
  {
    path: "/login",
    authType: "no-auth",
    layout: {
      type: "mobile",
      showFooter: false,
    },
    component:LoginPage,
  },
];

export default routes;
