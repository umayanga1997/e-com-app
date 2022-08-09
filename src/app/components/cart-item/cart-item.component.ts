import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item?: Item;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  removeFromCard(item: Item) {
    this.cartService.removeFromCard(item);
  }
}
