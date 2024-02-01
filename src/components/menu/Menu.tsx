import { useLoaderData } from "react-router-dom";
import { MenuType } from "../../lib/restaurant_api";
import MenuCard from "./MenuCard";

export default function Menu() {
  const menusData = useLoaderData();
  return (
    <div>
      {Array.isArray(menusData) &&
        menusData.map((pizza: MenuType) => (
          <MenuCard key={pizza.id} menu={pizza}></MenuCard>
        ))}
    </div>
  );
}

// loader fucntion which fetch data and return data, these data can be as a value of loader property of route object.
// export const menuLoader = async (): Promise<MenuType[]> => {
//   const menus = await getMenu();
//   return menus;
// };
