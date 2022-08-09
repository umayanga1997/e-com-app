import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isCartPage : Boolean = false;
  countOfItems: number = 0;

  constructor(private cartService: CartService) {
    this.cartService.cartList.subscribe((value) => {
      this.countOfItems = value.length;
    });
  }

  clearCart(){
    this.cartService.removeAllItems();
  }
  ngOnInit(): void {}
}
