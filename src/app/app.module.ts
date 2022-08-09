import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { ItemComponent } from './components/item/item.component';
import { ItemDetailsComponent } from './screens/item-details/item-details.component';
import { HomeComponent } from './screens/home/home.component';
import { DetailsCardComponent } from './components/details-card/details-card.component';
import { CartScreenComponent } from './screens/cart-screen/cart-screen.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ItemComponent, ItemDetailsComponent, HomeComponent, DetailsCardComponent, CartScreenComponent, CartItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
