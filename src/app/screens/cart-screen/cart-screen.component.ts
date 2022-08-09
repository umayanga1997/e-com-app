import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-screen',
  templateUrl: './cart-screen.component.html',
  styleUrls: ['./cart-screen.component.scss'],
})
export class CartScreenComponent implements OnInit {
  itemList: Item[] = [];
  totalOfAmount: Number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getItems().subscribe((data) => {
      this.itemList = data;
    });
    this.cartService.getTotal().subscribe((data) => {
      this.totalOfAmount = data;
    });
  }
}
