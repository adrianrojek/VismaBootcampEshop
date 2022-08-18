import {Product} from "./product";

export interface Category {
  description: string,
  name: string,
  publicId: string,
  products: Product[]
}
