export interface Product {
    id: number;
    name: string;
    price: number; 
    //quantity: number;  
  }

export interface Quantity{
  productId: number;
  numOfStock: number;
}