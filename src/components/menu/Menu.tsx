import { MenuType, getMenu } from "../../lib/restaurant_api";

export default function Menu() {
  return <div>Menu</div>;
}

// loader fucntion which fetch data and return data, these data can be as a value of loader property of route object.
export const menuLoader = async (): Promise<MenuType[]> => {
  const menus = await getMenu();
  return menus;
};
