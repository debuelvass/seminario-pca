import { TestBed } from '@angular/core/testing';

import { IntroGuard } from './guards.page';

describe('GuardsPage', () => {
  let guard: IntroGuard;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IntroGuard);
    });

  it('should create', () => {
    expect(guard).toBeTruthy();
  });
});
