import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Item } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public items: Item[] = [];
  public cartList = new BehaviorSubject<any>([]);
  public total = new BehaviorSubject<Number>(0);

  constructor() {}

  getItems() {
    return this.cartList.asObservable();
  }

  getTotal() {
    return this.total.asObservable();
  }

  setItems(items: Item[]) {
    this.items.push(...items);
    this.cartList.next(items);
  }
  setTotal() {
    let value = 0;
    if (this.items.length == 0) value = 0;
    this.items.map((e) => {
      value += Number(e.price.amount);
    });
    this.total.next(value);
  }

  addToCard(item: Item) {
    // let isFoud = this.items.some((e)=> e.id == item.id);
    // if(isFoud){
    //   let getIndex = this.items.findIndex((e)=> e.id == item.id);
    //   let item = this.items[getIndex];
    //   // this.items[getIndex] = Object.assign(item,{
    //   //   total : item.total + Number(item.price.amount),
    //   // })
    // }
    this.items.push(item);
    this.cartList.next(this.items);
    this.setTotal();
  }
  removeFromCard(item: Item) {
    let index = this.items.findIndex((e) => item.id == e.id);
    this.items.splice(index, 1);
    this.cartList.next(this.items);
    this.setTotal();
  }

  removeAllItems() {
    this.items = [];
    this.cartList.next(this.items);
    this.setTotal();
  }
}
