import { MenuType } from "../../lib/restaurant_api";

export default function MenuCard({ menu }: { menu: MenuType }) {
  return (
    <li>
      <p>ID: {menu.id}</p>
      <h2>{menu.name}</h2>
      <img src={menu.imageUrl} alt={menu.name} />
      <p>Price: {menu.unitPrice}</p>
      <p>Ingridients</p>
      <ul>
        {menu.ingredients.map((ingri, index) => (
          <li key={ingri + index}>{ingri}</li>
        ))}
      </ul>
    </li>
  );
}
