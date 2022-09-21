import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product();
  @Output() added = new EventEmitter();

  quantity: number = 1;
  quantityOptions = [1, 2, 3, 4, 5];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  addItem(product: Product) {
    this.added.emit(new Cart(product, this.quantity));
    alert(`${product.name} has been added to you shopping cart.`);
  }
}
