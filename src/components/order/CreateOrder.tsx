import { Form, useActionData, useNavigation } from "react-router-dom";
import { ActionReturnErrorType } from "../../lib/restaurant_api";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

export default function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  // accessing return data from action fuction
  const actionData = useActionData() as ActionReturnErrorType;
  const cart = fakeCart;

  return (
    <div className="mx-auto flex w-[75%] flex-col items-center gap-4 md:w-[45%]">
      <h2>Ready to order? Let's go!</h2>
      <Form className="grid w-full gap-4" action="/order/new" method="POST">
        <div className="grid">
          <label>Name</label>
          <input
            className="rounded-md px-4 py-2 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-orange-400 focus:ring-opacity-30"
            type="text"
            name="customer"
            placeholder="your full name"
            required
          />
        </div>

        <div className="grid">
          <label>Phone number</label>
          <input
            className="rounded-md px-4 py-2 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-orange-400 focus:ring-opacity-30"
            placeholder="mobile or phone number"
            type="tel"
            name="phone"
            required
          />
          {actionData?.phone && (
            <p className="text-red-500">{actionData.phone}</p>
          )}
        </div>

        <div className="grid">
          <label>Address</label>

          <input
            className="rounded-md px-4 py-2 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-orange-400 focus:ring-opacity-30"
            placeholder="address"
            type="text"
            name="address"
            required
          />
        </div>

        <div>
          <input
            className="me-1 rounded-md accent-orange-400 outline-none ring-red-400 focus:ring-1"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Express delivary</label>
        </div>

        <div className="text-center">
          <input
            type="hidden"
            id="cart"
            name="cart"
            value={JSON.stringify(cart)}
          />
          <button
            className="w-full rounded-xl bg-orange-400  px-4 py-2 font-semibold shadow-md shadow-zinc-500 outline-none duration-200 ease-in  hover:bg-orange-500 "
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting....." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}
