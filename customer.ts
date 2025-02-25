import { CustomerType } from "./customer-type.enum";
import {
  DEFAULT_CUSTOMER_DISCOUNT,
  PREMIUM_CUSTOMER_DISCOUNT,
  REGULAR_CUSTOMER_DISCOUNT,
  VIP_CUSTOMER_DISCOUNT,
} from "./discount.constants";

export class Customer {
  private readonly name: string;
  private readonly type: string; // "Regular", "Premium", "VIP"

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  getName(): string {
    return this.name;
  }

  getType(): string {
    return this.type;
  }

  getDiscountByType(): number {
    switch (this.type) {
      case CustomerType.REGULAR:
        return REGULAR_CUSTOMER_DISCOUNT;
      case CustomerType.PREMIUM:
        return PREMIUM_CUSTOMER_DISCOUNT;
      case CustomerType.VIP:
        return VIP_CUSTOMER_DISCOUNT;
      default:
        return DEFAULT_CUSTOMER_DISCOUNT;
    }
  }
}
