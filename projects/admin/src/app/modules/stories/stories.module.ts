import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { Route, RouterModule } from '@angular/router';
import { ActionsMenuModule } from '@shared/components/actions-menu/actions-menu.module';
import { SearchInputModule } from '@shared/components/search-input/search-input.module';
import { TableSortDirectiveModule } from '@shared/directives/table-sort-directive/table-sort-directive.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes/shared-pipes.module';
import { StoryListComponent } from './components/story-list/story-list.component';
import { StoryComponent } from './components/story/story.component';

const routes: Route[] = [
  {
    path: '',
    component: StoryListComponent
  },
  {
    path: ':id',
    component: StoryComponent
  }
]

@NgModule({
  declarations: [
    StoryListComponent,
    StoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    TableSortDirectiveModule,
    SharedPipesModule,
    ActionsMenuModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    SearchInputModule
  ]
})
export class StoriesModule { }
