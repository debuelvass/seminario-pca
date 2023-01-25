import { TestBed } from '@angular/core/testing';

import { ServicesPage } from './services.page';

describe('ServicesPage', () => {
  let service: ServicesPage;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
      service = TestBed.inject(ServicesPage);
    });


  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
