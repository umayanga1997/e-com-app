import { TestBed } from '@angular/core/testing';

import { ItemServicesService } from './item-services.service';

describe('ItemServicesService', () => {
  let service: ItemServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
