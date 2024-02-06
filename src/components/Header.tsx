import { Link } from "react-router-dom";
import React_pizza_logo from "./ui/icons/React_pizza_logo";
import SearchOrder from "./order/SearchOrder";
import CartIcon from "./ui/icons/CartIcon";

export default function Header() {
  return (
    <header className=" bg-orange-400/80 p-4 md:px-[5rem] md:pb-2 md:pt-6">
      <nav className="flex flex-nowrap items-center justify-between ">
        <Link className="flex flex-nowrap items-center" to="/">
          <React_pizza_logo />{" "}
          <span className="text-xl font-light tracking-widest md:text-[2rem]">
            React Pizza
          </span>
        </Link>
        <ul className="flex flex-nowrap  gap-8 text-[1.2rem] font-light tracking-widest md:text-[1.5rem]">
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li className="flex items-center justify-center">
            <Link to="/cart">
              <CartIcon />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-2 flex justify-end">
        <SearchOrder />
      </div>
    </header>
  );
}
