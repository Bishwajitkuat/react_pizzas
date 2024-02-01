import { Link } from "react-router-dom";
import React_pizza_logo from "./ui/icons/React_pizza_logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-[5rem] py-[2rem]">
      <Link to="/">
        <React_pizza_logo />
      </Link>
      <ul className="flex gap-3 text-[1.5rem] font-semibold tracking-widest">
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/order/new">Order</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </header>
  );
}
