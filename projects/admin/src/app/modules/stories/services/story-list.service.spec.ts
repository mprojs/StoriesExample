import { TestBed } from '@angular/core/testing';

import { StoryListService } from './story-list.service';

describe('StoryListService', () => {
  let service: StoryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
