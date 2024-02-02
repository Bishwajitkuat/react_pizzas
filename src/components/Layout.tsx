import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./ui/icons/Loader";
import Footer from "./Footer";

export default function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="flex h-screen w-screen flex-col">
      <Header />
      {isLoading && <Loader />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
