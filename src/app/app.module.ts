import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import {AdminModule} from "./admin/admin.module";
import {ShopModule} from "./shop/shop.module";
import {HomePageModule} from "./home-page/home-page.module";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {CartModule} from "./cart/cart.module";
import {CustomHttpInterceptorInterceptor} from "./shared/interceptors/custom-http-interceptor.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    AdminModule,
    ShopModule,
    HttpClientModule,
    CartModule

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorInterceptor,multi: true}],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
