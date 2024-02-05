export default function OrderItem({ item }) {
  const { name, quantity, totalPrice } = item;
  return (
    <li className="flex justify-between border-b border-t border-zinc-500/20 px-2 py-2">
      <h3>
        {name} x{quantity}
      </h3>
      <p>{totalPrice}€</p>
    </li>
  );
}
