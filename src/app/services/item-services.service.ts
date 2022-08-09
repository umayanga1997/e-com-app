import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/item.interface';
// import { ItemsData } from '../items';

@Injectable({
  providedIn: 'root',
})
export class ItemServicesService {
  private url =
    'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json';

  constructor(private client: HttpClient) {}

  getItems(): Observable<Response> {
    var response = this.client.get<Response>(this.url);
    return response;
  }
}
