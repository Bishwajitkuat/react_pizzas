const API_URL = "https://react-fast-pizza-api.onrender.com/api";
import { redirect } from "react-router-dom";
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

// interface for the each menu object
export interface MenuType {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
}

// interface for item in cart array for post request to create order
interface CartItemTypeForCreateOrder {
  pizzaId: string;
  name: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}
// interface for order object for post request to create order
interface OrderTypeForCreateOrder {
  customer: string;
  address: string;
  phone: string;
  priority: boolean;
  cart: CartItemTypeForCreateOrder[];
}
// interface for return object from action fucntion in case of error

export interface ActionReturnErrorType {
  phone?: string;
  customer?: string;
  address?: string;
}

// this function call will fetch all data and return array of objects
export async function getMenu(): Promise<MenuType[]> {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw Error("Failed to fetch menu data!");

  const { data }: { data: MenuType[] } = await res.json();
  return data;
}

// get order by id
export async function getOrder({ params }) {
  const id = await params.orderId;
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id} `);
  const { data } = await res.json();
  return data;
}

// placeing a new order
export async function createOrder({ request }) {
  try {
    const formData = await request.formData();
    const orderData = Object.fromEntries(formData);
    // cart item object comming from form data is not same as the api expects
    // we need to restructure the cart item before making the post request.
    const orderCartForPost = JSON.parse(orderData.cart).reduce(
      (
        acc: CartItemTypeForCreateOrder[],
        item,
      ): CartItemTypeForCreateOrder[] => {
        const cartItem = {
          pizzaId: item.id,
          name: item.name,
          quantity: item.quantity,
          unitPrice: item.unitPrice,
          totalPrice: item.totalPrice,
        };
        return [...acc, cartItem];
      },
      [],
    );
    // structuring the oder object as expected by the api
    const order: OrderTypeForCreateOrder = {
      // if i use spread operator, typescript can not ditect the properties
      customer: orderData.customer,
      address: orderData.address,
      phone: orderData.phone,
      cart: orderCartForPost,
      priority: orderData.priority === "on",
    };
    // form data validation and early return with errors object is validation fails
    const errors: ActionReturnErrorType = {};
    if (!isValidPhone(order.phone)) {
      errors.phone = "Please input a valid phone number!";
    }
    // all other validation can be here too, may be with zod later
    // we will return errors object if it not empty
    if (Object.keys(errors).length > 0) return errors;

    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    // redirecting to order page by redirect function profided by react-router
    return redirect(`/order/${data.id}`);
  } catch {
    throw Error("Failed creating your order");
  }
}
// updating a order wich needs id and updated object
// export async function updateOrder(id: number, updateObj: MenuType) {
//   try {
//     const res = await fetch(`${API_URL}/order/${id}`, {
//       method: "PATCH",
//       body: JSON.stringify(updateObj),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!res.ok) throw Error();
//   } catch (err) {
//     throw Error("Failed updating your order");
//   }
// }
