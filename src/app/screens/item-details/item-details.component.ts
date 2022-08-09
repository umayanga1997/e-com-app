import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/interfaces/item.interface';
import { ItemServicesService } from 'src/app/services/item-services.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  item_id: string | null | undefined;
  item: Item | undefined;

  constructor(
    private activeRoutes: ActivatedRoute,
    private itemServices: ItemServicesService
  ) {}

  ngOnInit(): void {
    this.item_id = this.activeRoutes.snapshot.paramMap.get('id');

    this.itemServices.getItems().subscribe((response) => {
      if (response.result == 'success')
        this.item = response.data.filter((e) => e.id == this.item_id)[0];
    });
  }

  ngOnDestroy() {}
}
