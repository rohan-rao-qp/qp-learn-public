import { Customer } from "./customer";

export class Order {
  customer: Customer;
  items: string[];
  prices: number[];
  totalPrice: number;
  discountedPrice: number;

  constructor(customer: Customer) {
    this.customer = customer;
    this.items = [];
    this.prices = [];
    this.totalPrice = 0;
    this.discountedPrice = 0;
  }

  addItem(item: string, price: number): void {
    this.items.push(item);
    this.prices.push(price);
  }

  calculateTotal(): void {
    this.totalPrice = this.prices.reduce((sum, price) => sum + price, 0);
    this.applyDiscount();
  }

  private applyDiscount(): void {
    this.discountedPrice =
      this.totalPrice - this.totalPrice * this.customer.discount;
  }

  printOrder(): void {
    console.log(`Customer: ${this.customer.name}`);
    console.log(`Items: ${this.items.join(", ")}`);
    console.log(`Total Price: ${this.totalPrice}`);
    console.log(`Discounted Price: ${this.discountedPrice}`);
  }
}
