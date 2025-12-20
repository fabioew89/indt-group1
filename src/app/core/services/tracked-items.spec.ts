import { TestBed } from '@angular/core/testing';

import { TrackedItems } from './tracked-items';

describe('TrackedItems', () => {
  let service: TrackedItems;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackedItems);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
