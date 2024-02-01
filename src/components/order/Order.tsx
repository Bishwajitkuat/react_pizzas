import { useLoaderData } from "react-router";
import { calcMinutesLeft, formatCurrency, formatDate } from "../../lib/helpers";
import SearchOrder from "./SearchOrder";

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
    <div>
      <SearchOrder />
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export default Order;
