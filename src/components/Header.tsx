import { Link } from "react-router-dom";
import React_pizza_logo from "./ui/icons/React_pizza_logo";
import SearchOrder from "./order/SearchOrder";

export default function Header() {
  return (
    <header className="sticky top-0 bg-orange-400 px-[5rem] pb-2 pt-6">
      <nav className="flex flex-nowrap items-center justify-between ">
        <Link className="flex flex-nowrap items-center" to="/">
          <React_pizza_logo />{" "}
          <span className="text-[2rem] font-light tracking-widest">
            React Pizza
          </span>
        </Link>
        <ul className="flex flex-nowrap  gap-8 text-[1.5rem] font-light tracking-widest">
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
