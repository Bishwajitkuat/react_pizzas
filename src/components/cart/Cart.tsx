import { Link } from "react-router-dom";
import { fakeCart } from "../order/CreateOrder";
import CartItem from "./CartItem";

export default function Cart() {
  const totalPrice: number = 100;
  const cartItems = fakeCart;
  return (
    <div className="flex justify-center">
      <div className="m-2 rounded-md bg-zinc-900/10 p-2 shadow-md shadow-zinc-900/30 md:m-8 md:w-[65%] md:p-8">
        <Link to="/menu"> Menu </Link>
        <div className="mb-4 flex w-full justify-between py-4 text-xl">
          <h1>Shopping Cart</h1>
          <p>Total: {totalPrice}</p>
        </div>
        <ul className="flex flex-col gap-4 border-b border-t border-zinc-400 py-6">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.pizzaId} cartItem={cartItem} />
          ))}
        </ul>
        <div className="flex justify-end gap-2 px-2 py-6 text-right uppercase md:tracking-widest">
          <button className="min-h-[3rem] rounded-xl bg-orange-300 px-4 py-2  shadow-md shadow-zinc-500 outline-none duration-200 ease-in hover:bg-orange-500 hover:shadow-orange-500/50  md:w-[20%] ">
            Clear Cart
          </button>
          <button className=" min-h-[3rem] rounded-xl bg-orange-300 px-4  py-2  shadow-md shadow-zinc-500 outline-none duration-200 ease-in  hover:bg-orange-500 hover:shadow-orange-500/50 md:w-[20%] ">
            Order Pizzas
          </button>
        </div>
      </div>
    </div>
  );
}
