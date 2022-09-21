import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { ProductItemComponent } from './components/product-item/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail/product-detail.component';
import { ConfirmationComponent } from './components/confirmation/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductDetailComponent,
    ConfirmationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
