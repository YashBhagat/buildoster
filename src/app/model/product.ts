import { Descriptions } from "./description";
import { Images } from "./images";

export interface Product {
  id: number;
  product_name: string;
  price: number;
  mrp: number;
  sku: string;
  thumbnail: Images
  images: Images[]
}


export interface ProductDetails {
  id: number,
  product_name: string;
  price: number;
  mrp: number;
  sku: string;
  images: Images[];
  description: Descriptions[]
}
