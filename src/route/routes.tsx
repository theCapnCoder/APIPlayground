import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Family from "../containers/Family/Family";
import MainLayout from "../containers/MainLayout/MainLayout";
import Fruit from "../containers/Fruit/Fruit";
import Fruits from "../containers/Fruits/Fruits";
import Genus from "../containers/Genus/Genus";
import Order from "../containers/Order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "fruits",
        element: <Fruits />,
      },
      {
        path: "fruit/:id",
        element: <Fruit />,
      },
      {
        path: "family",
        element: <Genus />,
      },
      {
        path: "genus",
        element: <Genus />,
      },
      {
        path: "order",
        element: <Genus />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
