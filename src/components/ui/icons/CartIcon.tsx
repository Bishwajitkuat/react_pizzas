import { useSelector } from "react-redux";
import { IRootState } from "../../../store";

function CartIcon() {
  // data will come form redux
  const { cart } = useSelector((state: IRootState) => state.cart);
  const itemNumver: number = cart.reduce((acc, item) => acc + item.quantity, 0);
  const showItemNumber: boolean = cart.length > 0 ? true : false;
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
      {showItemNumber && (
        <p className="absolute bottom-6 left-4 h-[2rem] w-[2rem] rounded-full bg-emerald-400 text-center font-bold text-zinc-950">
          {itemNumver}
        </p>
      )}
    </div>
  );
}

export default CartIcon;
