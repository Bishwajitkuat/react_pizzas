import TrashCanIcon from "../ui/icons/TrashCanIcon";

export default function CartItem({ cartItem }) {
  const { name, quantity, unitPrice, totalPrice } = cartItem;
  return (
    <li className="grid w-full grid-cols-5 rounded-md bg-slate-100 p-4 shadow-md shadow-zinc-200 duration-150 ease-in  hover:bg-orange-300 hover:shadow-orange-300/50">
      <div className="col-span-2 md:col-span-3">
        <h2 className="tracking-widest md:text-xl">{name}</h2>
        <p>{unitPrice}€</p>
      </div>
      <div className="col-span-2 grid grid-cols-3 items-center justify-center gap-2 justify-self-center md:col-span-1 md:text-xl md:font-bold">
        <button className=" hover:text-green-500 ">+</button>
        <p className="rounded-md border border-zinc-600 px-2">{quantity}</p>
        <button className=" hover:text-red-500 ">-</button>
      </div>
      <div className="grid grid-cols-2 items-center justify-center gap-2 justify-self-end pe-2">
        <p className="md:text-xl md:font-bold md:tracking-widest">
          {totalPrice}€
        </p>
        <button className="duration-200 ease-in hover:scale-105">
          <TrashCanIcon />
        </button>
      </div>
    </li>
  );
}
