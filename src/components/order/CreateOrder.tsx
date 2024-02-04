import { Form, useActionData, useNavigation } from "react-router-dom";
import { ActionReturnErrorType } from "../../lib/restaurant_api";
import PersonIcon from "../ui/icons/PersonIcon";
import MapPinIcon from "../ui/icons/MapPinIcon";
import PhoneIcon from "../ui/icons/PhoneIcon";

export const fakeCart = [
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
    <div className="mx-auto flex w-[95%] flex-col items-center gap-4 py-8 md:w-[45%]">
      <Form className="grid w-full gap-4" action="/order/new" method="POST">
        <div className="grid">
          <div className="flex items-center rounded-full bg-slate-100">
            <div className="flex h-full items-center justify-center  px-2">
              <PersonIcon />
            </div>
            <label className="min-w-[4.5rem] border-e border-orange-400 py-3 pe-2">
              Name
            </label>
            <input
              className="w-full rounded-full rounded-s bg-slate-100 px-2 py-3 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-orange-400 focus:ring-opacity-30"
              type="text"
              name="customer"
              placeholder="full name"
              required
            />
          </div>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center rounded-full bg-slate-100">
            <div className="flex h-full items-center justify-center px-2">
              <PhoneIcon />
            </div>
            <label className="min-w-[4.5rem] border-e border-orange-400 py-3 pe-2">
              Number
            </label>
            <input
              className="w-full rounded-full rounded-s bg-slate-100 px-2 py-3 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-orange-400 focus:ring-opacity-30"
              placeholder="contact number"
              type="tel"
              name="phone"
              required
            />
          </div>
          {actionData?.phone && (
            <p className="text-red-500">{actionData.phone}</p>
          )}
        </div>

        <div className="grid gap-2">
          <div className="flex items-center rounded-full bg-slate-100 ">
            <div className="flex h-full items-center justify-center  px-2">
              <MapPinIcon />
            </div>
            <label className="min-w-[4.5rem] border-e border-orange-400 py-3 pe-2">
              Address
            </label>
            <input
              className="w-full rounded-full rounded-s bg-slate-100 px-2 py-3 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-orange-400 focus:ring-opacity-30"
              placeholder="delivary address"
              type="text"
              name="address"
              required
            />
          </div>
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
            className="min-h-[3rem] w-full rounded-full bg-orange-300 px-4  py-2 font-semibold uppercase shadow-sm shadow-zinc-500 outline-none duration-200 ease-in  hover:bg-orange-500 "
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting....." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}
