import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Menu, { menuLoader } from "./components/menu/Menu";
import Cart from "./components/cart/Cart";
import CreateOrder from "./components/order/CreateOrder";
import Order from "./components/order/Order";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    // layout route
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
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
