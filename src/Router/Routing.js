import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Initiate from "../pages/initiate/Initiate";
import NotFound from "../pages/NotFound/NotFound";
import Gaming from "../pages/gameing/Gaming";

  
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
      element: <Gaming />,
    },
    // {
    //   path: "/contact-us",
    //   element: <ContactUs />,
    // },
    // {
    //   path: "/shopping",
    //   element: <Shop/>
    // }
  ]);
  