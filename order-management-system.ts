// The OrderManagementSystem handles customer orders, calculates prices, and applies discounts.
// However, the codebase is poorly designed, making it hard to maintain and extend.

import { Customer } from "./customer";
import { CustomerType } from "./customer-type.enum";
import { Order } from "./order";
import { KEYBOARD_ITEM, LAPTOP_ITEM, MOUSE_ITEM } from "./order-items.data";

// Order Management System - Handles orders
class OrderManagementSystem {
  static main(): void {
    const CUSTOMER_NAME = "John Doe";
    const CUSTOMER_TYPE = CustomerType.VIP;

    const customer = new Customer(CUSTOMER_NAME, CUSTOMER_TYPE);
    const order = new Order(customer);

    order.addItem(LAPTOP_ITEM.name, LAPTOP_ITEM.price);
    order.addItem(MOUSE_ITEM.name, MOUSE_ITEM.price);
    order.addItem(KEYBOARD_ITEM.name, KEYBOARD_ITEM.price);

    order.calculateTotal();

    order.printOrder();

    OrderManagementSystem.generateInvoice(order);
  }

  static generateInvoice(order: Order): void {
    console.log("Generating Invoice...");
    console.log(`Customer: ${order.customer.name}`);
    console.log(`Total: $${order.totalPrice}`);
    console.log(`Discounted Total: $${order.discountedPrice}`);
    console.log(`Items: ${order.items.join(", ")}`);
    console.log("Thank you for shopping with us!");
  }
}

// Run the order management system
OrderManagementSystem.main();
