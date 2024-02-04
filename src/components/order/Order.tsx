import { useLoaderData } from "react-router";
import { calcMinutesLeft, formatCurrency, formatDate } from "../../lib/helpers";
import OrderItem from "./OrderItem";

// Test ID: IIDSAT

type OrderType = {
  customer: string;
  status: string;
  priority: boolean;
  cart: {
    addIngredients: string[];
    removeIngredients: string[];
    pizzaId: number;
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }[];
  id: string;
  estimatedDelivery: string;
  orderPrice: number;
  priorityPrice: number;
};

function Order() {
  const order = useLoaderData() as OrderType;
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  return (
    <div className="mx-auto my-4 flex flex-col gap-6 rounded-md bg-zinc-900/10 p-2 shadow-md shadow-zinc-900/30 md:my-8 md:w-[65%]  md:gap-8 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
        <h2 className="mb-2 text-xl font-semibold tracking-widest">
          Order Id#: {id}
        </h2>
        <div>
          {priority && (
            <span className="me-1 rounded-full bg-yellow-400 px-2 py-1 uppercase tracking-widest">
              Priority
            </span>
          )}
          <span className="me-1 rounded-full bg-green-500 px-2 py-1 uppercase tracking-widest">
            {status}
          </span>
        </div>
      </div>
      <div className="rounded-md bg-slate-100 p-4 shadow-md shadow-zinc-200 duration-150 ease-in  hover:bg-orange-300 hover:shadow-orange-300/50">
        <h2 className="mb-2 text-xl font-semibold tracking-widest">Status</h2>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
      <ul className="rounded-md bg-slate-100 p-4 shadow-md shadow-zinc-200 duration-150 ease-in  hover:bg-orange-300 hover:shadow-orange-300/50">
        <h2 className="text-xl font-semibold tracking-widest">Order</h2>
        {cart.map((item) => (
          <OrderItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="rounded-md bg-slate-100 p-4 shadow-md shadow-zinc-200 duration-150 ease-in  hover:bg-orange-300 hover:shadow-orange-300/50">
        <h2 className="mb-2 text-xl font-semibold tracking-widest">Payment</h2>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export default Order;
