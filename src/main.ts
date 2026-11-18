import * as Sentry from "@sentry/browser";
import { ORDERS, describeOrder } from "./orders";

const dsn = import.meta.env.VITE_SENTRY_DSN as string | undefined;
if (dsn) {
  Sentry.init({ dsn, environment: import.meta.env.MODE, release: import.meta.env.VITE_RELEASE });
}

const list = document.getElementById("orders")!;
const details = document.getElementById("details")!;

for (const order of ORDERS) {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.textContent = `Open ${order.id}`;
  btn.dataset.orderId = order.id;
  btn.addEventListener("click", () => {
    details.textContent = describeOrder(order);
  });
  li.append(btn);
  list.append(li);
}
