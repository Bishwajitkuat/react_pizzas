import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { ActionReturnErrorType } from "../../lib/restaurant_api";
import PersonIcon from "../ui/icons/PersonIcon";
import MapPinIcon from "../ui/icons/MapPinIcon";
import PhoneIcon from "../ui/icons/PhoneIcon";
import OrderItem from "./OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IRootState } from "../../store";
import {
  updateAddress,
  updateContactNumber,
  updateName,
} from "../../features/userSlice";
import { removeFromOrder } from "../../features/orderSlice";
import { addCartAsArrayToCart } from "../../features/cartSlice";
import NoItemInCart from "../cart/NoItemInCart";
import { useState } from "react";

export default function CreateOrder() {
  const [expressDelivery, setExpressDelivery] = useState<boolean>(false);
  const { name, contactNumber, address } = useSelector(
    (state: IRootState) => state.user,
  );
  const { cart } = useSelector((state: IRootState) => state.order);
  const dispatch: AppDispatch = useDispatch();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === "submitting";
  // accessing return data from action fuction
  const actionData = useActionData() as ActionReturnErrorType;

  const handleGoBackToCart = () => {
    // setting cart state in cartSlice
    dispatch(addCartAsArrayToCart(cart));
    // reseting cart state in orderSlice
    dispatch(removeFromOrder());
    // redirecting to cart route
    navigate("/cart");
  };
  const handleCancleOrder = () => {
    // resetting cart state in orderSlice
    dispatch(removeFromOrder());
    // redirecting to menu page
    navigate("/menu");
  };
  const cartTotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  const grandTotal = cartTotal * (expressDelivery ? 1.2 : 1);

  return (
    <div className="mx-auto flex w-[95%] flex-col items-center gap-4 py-8 md:w-[45%]">
      {cart.length > 0 ? (
        <ul className="mb-12 w-full rounded-md bg-slate-100 p-4 shadow-md shadow-zinc-200 ">
          <li className="mb-8 text-center text-xl font-semibold uppercase tracking-widest">
            Order detail
          </li>
          {cart.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}
          {expressDelivery && (
            <li className="flex justify-between border-b border-t border-zinc-500/20 px-2 py-2">
              <p>Express delivery fee</p>
              <p>{(cartTotal * 0.2).toFixed(2)}€</p>
            </li>
          )}
          <li className="mt-2 flex justify-between px-2 text-xl font-semibold">
            <p>Total</p>
            <p>{grandTotal.toFixed(2)}€</p>
          </li>
        </ul>
      ) : (
        <NoItemInCart />
      )}
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
              value={name}
              onChange={(e) => dispatch(updateName(e.target.value))}
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
              value={contactNumber}
              onChange={(e) => dispatch(updateContactNumber(e.target.value))}
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
              value={address}
              onChange={(e) => dispatch(updateAddress(e.target.value))}
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
            checked={expressDelivery}
            onChange={(e) => setExpressDelivery(e.target.checked)}
          />
          <label htmlFor="priority">
            Express delivary (20% of the cart value)
          </label>
        </div>

        <div className="text-center">
          <input
            type="hidden"
            id="cart"
            name="cart"
            value={JSON.stringify(cart)}
          />
          <div className="flex gap-2">
            <button
              className="min-h-[3rem] w-full rounded-full bg-orange-300 px-4  py-2 font-semibold uppercase shadow-sm shadow-zinc-500 outline-none duration-200 ease-in  hover:bg-orange-500 "
              disabled={isSubmitting}
              type="button"
              onClick={handleGoBackToCart}
            >
              Cart
            </button>
            <button
              className="min-h-[3rem] w-full rounded-full bg-orange-300 px-4  py-2 font-semibold uppercase shadow-sm shadow-zinc-500 outline-none duration-200 ease-in  hover:bg-red-500 "
              disabled={isSubmitting}
              type="button"
              onClick={handleCancleOrder}
            >
              Cancle
            </button>
            <button
              className={
                cart.length < 1
                  ? "min-h-[3rem] w-full rounded-full bg-gray-500 px-4  py-2 font-semibold uppercase shadow-sm shadow-zinc-500 outline-none"
                  : "min-h-[3rem] w-full rounded-full bg-orange-300 px-4  py-2 font-semibold uppercase shadow-sm shadow-zinc-500 outline-none duration-200 ease-in  hover:bg-green-500"
              }
              type="submit"
              disabled={isSubmitting || cart.length < 1}
            >
              {isSubmitting ? "Submitting....." : "Order"}
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}
