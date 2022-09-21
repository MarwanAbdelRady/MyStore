import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  customerName: string = '';
  orderTotal: number = 0;

  constructor(private cartService: CartService, public route: Router) {}

  ngOnInit(): void {
    this.customerName = this.cartService.getName();
    this.orderTotal = this.cartService.calculateTotal();
  }
}
