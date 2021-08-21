/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImaServiceService } from './ima-service.service';

describe('Service: ImaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImaServiceService]
    });
  });

  it('should ...', inject([ImaServiceService], (service: ImaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
