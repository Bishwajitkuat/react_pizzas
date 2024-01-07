import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartOverview from "./cart/CartOverview";

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}
