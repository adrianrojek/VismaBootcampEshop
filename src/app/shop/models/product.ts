import {Order} from "./order";


export interface Product {
  name: string,
  publicId: string,
  price: number,
  orders: Order[],
  catalogName: string
}
