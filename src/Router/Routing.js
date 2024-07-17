import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Initiate from "../pages/initiate/Initiate";
import NotFound from "../pages/NotFound/NotFound";
import Gameing from "../pages/gameing/Gameing";
import Training from "../pages/training/training";

  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: "/initgame",
      element: <Initiate />,
    },
    {
      path: "/game",
      element: <Gameing />,
    },
    {
      path: "/tuturial",
      element: <Training />,
    },
  ]);
  