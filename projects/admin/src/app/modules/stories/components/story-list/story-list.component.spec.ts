import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryListService } from '@modules/stories/services/story-list.service';
import { SearchInputComponent } from '@shared/components/search-input/search-input.component';
import { MockBuilder } from 'ng-mocks';

import { StoryListComponent } from './story-list.component';

describe('StoryListComponent', () => {
  let component: StoryListComponent;
  let fixture: ComponentFixture<StoryListComponent>;

  beforeEach(() => MockBuilder(StoryListComponent)
    .mock(SearchInputComponent)
    .mock(StoryListService));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
