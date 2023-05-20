import React, { useState, useContext, createContext } from "react";
import type { PropsWithChildren } from "react";

import { Cart } from "../domain/cart";
import { User } from "../domain/user";
import { Order } from "../domain/order";

import { cookies } from "./fakeData";

const StoreContext = createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>();
  const [cart, setCart] = useState<Cart>({ products: [] });
  const [orders, setOrders] = useState<Order>();

  const value = {
    user,
    cart,
    cookies,
    orders,
    updateUser: setUser,
    updateCart: setCart,
    updateOrders: setOrders,
    emptyCart: () => setCart({ products: [] }),
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
