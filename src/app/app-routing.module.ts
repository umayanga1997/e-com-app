import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartScreenComponent } from './screens/cart-screen/cart-screen.component';
import { HomeComponent } from './screens/home/home.component';
import { ItemDetailsComponent } from './screens/item-details/item-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: ItemDetailsComponent },
  { path: 'mycart', component: CartScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
