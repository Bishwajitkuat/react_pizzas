const API_URL = "https://react-fast-pizza-api.onrender.com/api";
import { redirect } from "react-router-dom";

// interface for the each menu object
export interface MenuType {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
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
    const order = {
      ...orderData,
      cart: JSON.parse(orderData.cart),
      priority: orderData.priority === "on",
    };
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
export async function updateOrder(id: number, updateObj: MenuType) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
