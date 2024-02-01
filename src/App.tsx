import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/cart/Cart";
import CreateOrder from "./components/order/CreateOrder";
import Order from "./components/order/Order";
import Layout from "./components/Layout";
import { getMenu, getOrder } from "./lib/restaurant_api";
import Menu from "./components/menu/Menu";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    // layout route
    element: <Layout />,
    // this component will be rendered if error occures due to routes
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: getMenu,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: getOrder,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
