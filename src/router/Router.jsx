import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Layout from "./Layout";

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [{ path: "/", element: <MainPage /> }],
      },
    ])}
  />
);

export default Router;
