export interface Order {
  id: string;
  customer: string;
  items: { name: string; price: number; qty: number }[];
  tags?: string[];
}

export const ORDERS: Order[] = [
  { id: "A-100", customer: "Alpha Ltd", items: [{ name: "Widget", price: 12.5, qty: 2 }], tags: ["priority", "b2b"] },
  { id: "B-200", customer: "Beta Inc", items: [{ name: "Gadget", price: 40, qty: 1 }], tags: ["retail"] },
  // Gamma has no tags.
  { id: "C-300", customer: "Gamma Co", items: [{ name: "Doohickey", price: 7, qty: 3 }] },
];

export function orderTotal(order: Order): number {
  return order.items.reduce((sum, i) => sum + i.price * i.qty, 0);
}

export function formatPrice(value: number): string {
  return `$${value.toFixed(2)}`;
}

// Orders may have no tags (e.g. C-300): treat a missing list as empty.
export function describeOrder(order: Order): string {
  const tags = (order.tags ?? []).map((t) => `#${t}`).join(" ");
  return `${order.customer} — ${formatPrice(orderTotal(order))} ${tags}`.trim();
}
