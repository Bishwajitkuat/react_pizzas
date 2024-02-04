import { useLoaderData } from "react-router-dom";
import { MenuType } from "../../lib/restaurant_api";
import MenuCard from "./MenuCard";

export default function Menu() {
  const menusData = useLoaderData();
  return (
    <ul className="grid justify-center gap-8 p-4 sm:grid-cols-2 md:grid-cols-3 md:p-[5rem]">
      {Array.isArray(menusData) &&
        menusData.map((pizza: MenuType) => (
          <MenuCard key={pizza.id} menu={pizza}></MenuCard>
        ))}
    </ul>
  );
}

// loader fucntion which fetch data and return data, these data can be as a value of loader property of route object.
// export const menuLoader = async (): Promise<MenuType[]> => {
//   const menus = await getMenu();
//   return menus;
// };
