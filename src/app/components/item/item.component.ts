import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: Item | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCard(item: Item) {
    let newObj = Object.assign(item, {
      quantity: 1,
      total: Number(item.price.amount),
    });
    this.cartService.addToCard(newObj);
  }
}
