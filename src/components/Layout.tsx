import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "./cart/CartOverview";
import Loader from "./ui/icons/Loader";

export default function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Header />
      {isLoading && <Loader />}
      {!isLoading && (
        <main>
          <Outlet />
        </main>
      )}
      {/* <CartOverview /> */}
    </div>
  );
}
