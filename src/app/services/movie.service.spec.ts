import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
