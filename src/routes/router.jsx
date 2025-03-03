import { createBrowserRouter } from "react-router";
import Main from "../MainLayout/Main";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AllSportsEquipment from "../Pages/AllSportsEquipment";
import AddEquipment from "../Pages/AddEquipment";
import MyEquipment from "../Pages/MyEquipment";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";
import EquipmentDetails from "../Pages/EquipmentDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/all_sports",
        element: <AllSportsEquipment />,
        loader: () => fetch("http://localhost:3000/add_equipment"),
      },
      {
        path: "/equipment_details/:id",
        element: (
          <PrivateRoutes>
            <EquipmentDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/add_equipment/${params.id}`),
      },
      {
        path: "/add_equpment",
        element: (
          <PrivateRoutes>
            <AddEquipment />
          </PrivateRoutes>
        ),
      },
      {
        path: "/equipment_list",
        element: (
          <PrivateRoutes>
            <MyEquipment />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default routes;
