/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HousimgService } from './housimg.service';

describe('Service: Housimg', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HousimgService]
    });
  });

  it('should ...', inject([HousimgService], (service: HousimgService) => {
    expect(service).toBeTruthy();
  }));
});
