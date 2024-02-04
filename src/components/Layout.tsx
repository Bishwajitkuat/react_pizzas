import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./ui/Loader";
import Footer from "./Footer";

export default function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="flex h-screen w-screen min-w-[360px] flex-col">
      <Header />
      {isLoading && <Loader />}
      <main className="grow bg-gradient-to-br from-zinc-300 to-zinc-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
