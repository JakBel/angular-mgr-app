import { TestBed } from '@angular/core/testing';

import { ImageControlService } from './image-control.service';

describe('ImageControlService', () => {
  let service: ImageControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
