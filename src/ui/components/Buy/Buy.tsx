import { useState } from "react";

import { useOrderProducts } from "../../../application/orderProduct";

import {
  useCartStorage,
  useUserStorage,
} from "../../../services/storageAdapter";

import { UserName } from "../../../domain/user";

export function Buy() {
  const { orderProducts } = useOrderProducts();
  const { user } = useUserStorage();
  const { cart } = useCartStorage();

  const [name, setName] = useState<UserName>(user?.name ?? "");
  const [email, setEmail] = useState<Email>(user?.email ?? "");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  if (!user || !cart.products.length) return null;

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true);
    e.preventDefault();
    await orderProducts(user!, cart);
    setLoading(false);
  }

  return (
    <section>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit" disabled={loading}>
          {loading ? "Preparing an order..." : "Checkout"}
        </button>
      </form>
    </section>
  );
}
