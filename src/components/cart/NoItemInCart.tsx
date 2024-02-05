import { Link } from "react-router-dom";

export default function NoItemInCart() {
  return (
    <div className="mb-12 w-full rounded-md bg-slate-100 px-4 py-8 text-center shadow-md shadow-zinc-200 duration-150 ease-in ">
      <h2 className="mb-8 text-red-500">
        You have no item in the cart. Please visite menu page to add pizza to
        cart!
      </h2>
      <Link
        className="min-h-[3rem] rounded-full bg-orange-300 px-4 py-2  uppercase  shadow-sm shadow-zinc-500 outline-none duration-200 ease-in  hover:bg-orange-500 hover:shadow-orange-500/50 "
        to="/menu"
      >
        Menu
      </Link>
    </div>
  );
}
