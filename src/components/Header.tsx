import { Link } from "react-router-dom";
import React_pizza_logo from "./ui/icons/React_pizza_logo";
import SearchOrder from "./order/SearchOrder";

export default function Header() {
  return (
    <header className="px-[5rem] py-[2rem]">
      <nav className="flex justify-between items-center ">
        <Link to="/">
          <React_pizza_logo />
        </Link>
        <ul className="flex gap-3 text-[1.5rem] font-semibold tracking-widest">
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/order/new">Order</Link>
          </li>
        </ul>
      </nav>
      <div className="mt-[1.2rem] flex justify-end">
        <SearchOrder />
      </div>
    </header>
  );
}
