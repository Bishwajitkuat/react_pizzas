import { Link } from "react-router-dom";
import React_pizza_logo from "./ui/icons/React_pizza_logo";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <React_pizza_logo />
      </Link>
    </header>
  );
}
