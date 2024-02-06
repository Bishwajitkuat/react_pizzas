import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./ui/Loader";
import Footer from "./Footer";

export default function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="flex h-screen w-screen min-w-[360px] flex-col">
      <div className="">
        <Header />
      </div>
      {isLoading && <Loader />}
      <main className="flex-1 grow overflow-y-auto bg-gradient-to-br from-zinc-300 to-zinc-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
