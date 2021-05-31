import { Product, Quantity } from "./Product";
import { User } from "./User";

export const products: Product[] = [
    {id : 1, name : "Tomato", price : 15.45 },
    {id : 2, name : "Onion", price : 13.50 },
    {id : 3, name : "Avocado", price : 36.10 },
  ]

  export const quantity: Quantity[] = [
    {productId: 1, numOfStock: 15},
    {productId: 2, numOfStock: 51},
    {productId: 3, numOfStock: 36},
  ];

  export const stocks: Product[] = [];

  export const users: User[] = [ {email: "admin@mail.com"} ]