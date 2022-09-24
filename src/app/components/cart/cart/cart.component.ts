import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: Cart[] = [];
  customerName: string = '';
  address: string = '';
  creditCardNumber: string = '';
  orderTotal: number = 0;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getCartItems();
    this.calculateOrderTotal();
  }

  clearCart(): void {
    this.cartService.resetCart();
    this.items = [];
  }

  calculateOrderTotal(): void {
    this.orderTotal = this.cartService.calculateTotal();
  }

  update(): void {
    this.calculateOrderTotal();
  }

  removeItemFromCart(item: Cart): void {
    if (confirm(`Are you sure want to remove ${item.product.name}?`)) {
      this.cartService.removeCartItem(item);
      this.items = this.cartService.getCartItems();
      this.calculateOrderTotal();
      alert(`${item.product.name} removed from Shopping Cart.`);
    }
  }

  submit(): void {
    this.cartService.setName(this.customerName);
    this.calculateOrderTotal();
    this.router.navigate(['confirm']);
  }
}
