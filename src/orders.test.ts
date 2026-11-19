import { describe, expect, it } from "vitest";
import { ORDERS, describeOrder, formatPrice, orderTotal } from "./orders";

describe("orders", () => {
  it("computes the total", () => {
    expect(orderTotal(ORDERS[0])).toBe(25);
  });
  it("formats prices", () => {
    expect(formatPrice(7)).toBe("$7.00");
  });
  it("describes an order with tags", () => {
    expect(describeOrder(ORDERS[0])).toBe("Alpha Ltd — $25.00 #priority #b2b");
  });
  it("describes C-300 without tags", () => {
    const order = ORDERS.find(({ id }) => id === "C-300")!;
    expect(describeOrder(order)).toBe("Gamma Co — $21.00");
  });
});
