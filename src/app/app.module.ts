import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { BillingComponent } from './billing/billing.component';
import { SupervisordetailsComponent } from './supervisordetails/supervisordetails.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductsComponent,
    BillingComponent,
    SupervisordetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
