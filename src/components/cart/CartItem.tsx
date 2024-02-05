import { useDispatch } from "react-redux";
import TrashCanIcon from "../ui/icons/TrashCanIcon";
import {
  addOneToCart,
  removeFromCart,
  removeOneFromCart,
} from "../../features/cartSlice";

export default function CartItem({ cartItem }) {
  const dispatch = useDispatch();
  const { id, name, quantity, unitPrice, totalPrice, imageUrl } = cartItem;
  return (
    <li className="grid w-full grid-cols-4 items-center gap-1 rounded-md bg-slate-100 p-3 text-sm shadow-md shadow-zinc-200 duration-150 ease-in hover:bg-orange-300  hover:shadow-orange-300/50 md:gap-4 md:p-4">
      <img className=" rounded-md" src={imageUrl} alt={name} />
      <div className="col-span-1">
        <h2 className="tracking-widest md:text-xl">{name}</h2>
        <p>{unitPrice}€</p>
      </div>
      <div className="grid grid-cols-3 items-center justify-center gap-2 justify-self-center md:col-span-1 md:text-xl md:font-bold">
        <button
          className=" hover:text-green-500"
          onClick={() => dispatch(addOneToCart(id))}
        >
          +
        </button>
        <p>{quantity}</p>
        <button
          className=" hover:text-red-500"
          onClick={() => {
            dispatch(removeOneFromCart(id));
          }}
        >
          -
        </button>
      </div>
      <div className="flex flex-nowrap items-center justify-end gap-2 justify-self-end">
        <p className="md:text-xl md:font-bold md:tracking-widest">
          {totalPrice.toFixed(2)}€
        </p>
        <button
          className="duration-200 ease-in hover:scale-105"
          onClick={() => dispatch(removeFromCart(id))}
        >
          <TrashCanIcon />
        </button>
      </div>
    </li>
  );
}
