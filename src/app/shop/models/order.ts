import {OrderStatus} from "../enums/order-status";

export interface Order {
  publicId: string,
  status: OrderStatus,
  date: Date,
  totalSum: number
}
