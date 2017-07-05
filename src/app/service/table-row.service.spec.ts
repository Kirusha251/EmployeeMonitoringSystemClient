import { TestBed, inject } from '@angular/core/testing';

import { TableRowService } from './table-row.service';

describe('TableRowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableRowService]
    });
  });

  it('should be created', inject([TableRowService], (service: TableRowService) => {
    expect(service).toBeTruthy();
  }));
});
