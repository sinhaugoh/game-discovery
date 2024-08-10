import { createBrowserRouter } from "react-router-dom";
import GameDetailpage from "../pages/GameDetailpage";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "game/:id", element: <GameDetailpage /> },
    ],
  },
]);

export default router;
