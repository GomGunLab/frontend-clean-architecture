import { Cart } from "./cart";
import { totalPrice } from "./product";
import { User } from "./user";

import { currentDatetime } from "../lib/datetime";

export type OrderStatus = "new" | "delivery" | "complete";
export type Order = {
  user: UniqueId;
  cart: Cart;
  created: DateTimeString;
  status: OrderStatus;
  total: PriceCents;
};

export function createOrder(user: User, cart: Cart): Order {
  return {
    cart,
    user: user.id,
    status: "new",
    created: currentDatetime(),
    total: totalPrice(cart.products),
  };
}
