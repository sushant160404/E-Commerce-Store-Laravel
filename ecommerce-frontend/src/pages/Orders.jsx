import { useEffect, useState } from "react";
import api from "../services/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/orders")
      .then(res => setOrders(res.data));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>

      {orders.map(order => (
        <div key={order.id}
          className="border rounded p-4 mb-4 shadow">

          <div className="flex justify-between">
            <span>Order #{order.id}</span>
            <span>{order.status}</span>
          </div>

          <p className="mt-2 font-semibold">
            Total: ${order.total_amount}
          </p>
        </div>
      ))}
    </div>
  );
}