import { Component, OnInit } from '@angular/core';
import { StoryAdminDto } from '@common/generated-api/models/story-admin-dto';
import { StoryListAdminDto } from '@common/generated-api/models/story-list-admin-dto';
import { StorySort } from '@common/generated-api/models/story-sort';
import { StoryListService } from '@modules/stories/services/story-list.service';
import { FormControl } from '@ngneat/reactive-forms';
import { IActionProp, ITableColumn } from '@shared/types/common.types';
import { Merge, PropsFrom } from '@shared/types/type.utils';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: [ './story-list.component.scss' ]
})
export class StoryListComponent implements OnInit {
  columns: PropsFrom<Merge<StoryListAdminDto, IActionProp>, ITableColumn<StorySort['type']>> = {
    name: { propName: 'name', title: `Name`, sortType: 'NAME' },
    status: { propName: 'status', title: `Name`, sortType: 'STATUS' },
    createdAtMs: { propName: 'createdAtMs', title: `Date`, sortType: 'CREATED' },
    id: { propName: 'id' },
    actions: { propName: 'actions' }
  };
  displayedColumns = Object.keys(this.columns).filter((v) => v !== 'id');
  searchControl = new FormControl('');

  constructor(
    public storyListService: StoryListService
  ) {
  }

  ngOnInit(): void {
    this.storyListService.loadFirstPage();

    this.searchControl.valueChanges.subscribe({
      next: (data) => {
        this.storyListService.updateFilters({ searchQuery: data });
      }
    });
  }

  removeClick(story: StoryAdminDto) {
    this.storyListService.removeStory(story.id, true).subscribe();
  }

  archiveClick(story: StoryAdminDto) {
    this.storyListService.removeStory(story.id, false).subscribe();
  }
}
