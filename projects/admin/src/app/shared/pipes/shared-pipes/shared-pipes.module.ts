import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmptyDashPipe } from '@shared/pipes/shared-pipes/empty-dash.pipe';
import { FnAsyncPipe } from '@shared/pipes/shared-pipes/fn-async.pipe';
import { FnPipe } from '@shared/pipes/shared-pipes/fn.pipe';
import { HighlightSearch } from '@shared/pipes/shared-pipes/highlight.pipe';
import { HtmlToTextPipe } from '@shared/pipes/shared-pipes/htmlToText.pipe';
import { LimitTextPipe } from '@shared/pipes/shared-pipes/limit-text.pipe';
import { ToFormControlPipe } from '@shared/pipes/shared-pipes/to-form-control.pipe';
import { TypedPipe } from '@shared/pipes/shared-pipes/typed.pipe';

const pipes = [
  FnPipe,
  FnAsyncPipe,
  LimitTextPipe,
  ToFormControlPipe,
  HtmlToTextPipe,
  TypedPipe,
  EmptyDashPipe,
  HighlightSearch
];

@NgModule({
  declarations: [ ...pipes ],
  imports: [
    CommonModule
  ],
  exports: [ ...pipes ]
})
export class SharedPipesModule {
}
