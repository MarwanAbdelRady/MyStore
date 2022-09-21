import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';
// import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Cart[] = [];
  fullName: string = '';

  constructor() {}
  getCartItems(): Cart[] {
    return this.cartItems;
  }

  addCartItem(item: Cart): Cart[] {
    let i = this.cartItems.findIndex(
      (p) => p.product.name === item.product.name
    );
    if (i === -1) {
      this.cartItems.push(item);
    } else {
      this.cartItems[i].quantity =
        Number(this.cartItems[i].quantity) + Number(item.quantity);
    }
    return this.cartItems;
  }

  removeCartItem(item: Cart): Cart[] {
    let i = this.cartItems.findIndex(
      (p) => p.product.name === item.product.name
    );
    if (i != -1) {
      this.cartItems.splice(i, 1);
    }
    return this.cartItems;
  }

  getName() {
    return this.fullName;
  }

  setName(name: string): void {
    this.fullName = name;
  }

  calculateTotal(): number {
    let total = 0;
    this.cartItems.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return total;
  }

  resetCart(): Cart[] {
    this.cartItems = [];
    return this.cartItems;
  }
}
