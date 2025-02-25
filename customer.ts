import { CustomerType } from "./customer-type.enum";
import {
  DEFAULT_CUSTOMER_DISCOUNT,
  PREMIUM_CUSTOMER_DISCOUNT,
  REGULAR_CUSTOMER_DISCOUNT,
  VIP_CUSTOMER_DISCOUNT,
} from "./discount.constants";

export class Customer {
  name: string;
  type: string; // "Regular", "Premium", "VIP"
  discount: number;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
    this.setDiscount();
  }

  private setDiscount(): void {
    if (this.type === CustomerType.REGULAR) {
      this.discount = REGULAR_CUSTOMER_DISCOUNT;
    } else if (this.type === CustomerType.PREMIUM) {
      this.discount = PREMIUM_CUSTOMER_DISCOUNT;
    } else if (this.type === CustomerType.VIP) {
      this.discount = VIP_CUSTOMER_DISCOUNT;
    } else {
      this.discount = DEFAULT_CUSTOMER_DISCOUNT;
    }
  }
}
