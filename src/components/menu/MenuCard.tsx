import { MenuType } from "../../lib/restaurant_api";
import BankNoteIcon from "../ui/icons/BankNoteIcon";
import RecipeIcon from "../ui/icons/RecipeIcon";

export default function MenuCard({ menu }: { menu: MenuType }) {
  const handleAddToCart = (id) => {
    console.log(id);
  };
  return (
    <li className="rounded-md bg-gradient-to-br from-orange-400 via-[#983cfb]/50 to-[#3fb02a] p-[1px] shadow-lg shadow-zinc-400 ">
      <div className="flex h-full flex-col gap-4 rounded-md bg-zinc-200/90 pt-6 duration-200 ease-in hover:bg-zinc-200/70">
        <h2 className="text-center text-xl font-semibold uppercase tracking-widest">
          {menu.name}
        </h2>
        <img
          className=" shadow-md shadow-zinc-400"
          src={menu.imageUrl}
          alt={menu.name}
        />
        <div className="flex items-center gap-2 px-2">
          <BankNoteIcon />
          <p className="text-2xl font-semibold tracking-wider">
            {menu.unitPrice}€
          </p>
        </div>
        <div className="flex grow  items-center gap-2 px-2">
          <div>
            <RecipeIcon />
          </div>
          <p className="capitalize italic ">{menu.ingredients.join(", ")}</p>
        </div>
        <div className="text-center">
          <button
            className="w-full rounded-xl bg-orange-300 px-12 py-3 font-semibold uppercase tracking-widest shadow-md shadow-zinc-500 outline-none duration-200 ease-in hover:bg-orange-500 "
            onClick={() => handleAddToCart(menu.id)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
}
