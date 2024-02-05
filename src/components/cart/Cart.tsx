import { Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store";
import { clearCart } from "../../features/cartSlice";
import { addToOrder } from "../../features/orderSlice";
import NoItemInCart from "./NoItemInCart";

export default function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: IRootState) => state.cart);
  const totalPrice: number = cart.reduce(
    (acc, item) => acc + item.totalPrice,
    0,
  );
  const navigate = useNavigate();
  const handleCheckout = () => {
    // sending cart item info to order slice
    dispatch(addToOrder(cart));
    // clear cart
    dispatch(clearCart());
    // redirect to order route
    navigate("/order/new");
  };
  return (
    <div className="flex justify-center">
      <div className="m-2 rounded-md bg-zinc-900/10 p-2 shadow-md shadow-zinc-900/30 md:m-8 md:w-[65%] md:p-8">
        <Link to="/menu"> Menu </Link>
        <div className="mb-4 flex w-full justify-between py-4 text-xl">
          <h1>Shopping Cart</h1>
          <p>Total: {totalPrice}</p>
        </div>
        {cart.length > 0 ? (
          <ul className="flex flex-col gap-4 border-b border-t border-zinc-400 py-6">
            {cart.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </ul>
        ) : (
          <NoItemInCart />
        )}
        <div className="flex justify-end gap-2 px-2 py-6 text-right uppercase md:tracking-widest">
          <button
            className="min-h-[3rem] rounded-xl bg-orange-300 px-4 py-2 uppercase  shadow-md shadow-zinc-500 outline-none duration-200 ease-in hover:bg-orange-500 hover:shadow-orange-500/50"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
          <button
            className="min-h-[3rem] rounded-xl bg-orange-300 px-4 py-2  uppercase  shadow-md shadow-zinc-500 outline-none duration-200 ease-in  hover:bg-orange-500 hover:shadow-orange-500/50"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
