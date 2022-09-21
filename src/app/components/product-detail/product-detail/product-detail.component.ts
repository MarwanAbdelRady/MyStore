import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { Cart } from 'src/app/models/Cart';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  id: number = 0;
  product: Product = new Product();
  quantity: number = 1;
  quantityOptions = [1, 2, 3, 4, 5];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) {
    this.route.params.subscribe((params: Params) => {
      this.id = Number(params['id']);
    });
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.product = data.find((prod) => {
        return prod.id === this.id;
      }) as Product;
    });
  }
  addItem(product: Product) {
    this.cartService.addCartItem(new Cart(product, this.quantity));
    alert(`${product.name} has been added to your shopping cart.`);
  }
}
