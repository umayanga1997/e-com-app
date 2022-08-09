import { Component, OnInit } from '@angular/core';
import {  Item } from '../../interfaces/item.interface';
import { ItemServicesService } from '../../services/item-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: Item[] = [];

  constructor(itemServices: ItemServicesService) {
    itemServices.getItems().subscribe((response) => {
      if (response.result == 'success') this.items = response.data;
    });
  }

  ngOnInit(): void {}
}
