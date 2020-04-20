import { TestBed } from '@angular/core/testing';

import { EtudiantMService } from './etudiant-m.service';

describe('EtudiantMService', () => {
  let service: EtudiantMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtudiantMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
