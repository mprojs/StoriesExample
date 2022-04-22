import { ChangeDetectorRef, Injector, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { SearchService } from '@shared/services/search.service';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'highlight',
})
export class HighlightSearch implements PipeTransform, OnDestroy {
  private asyncPipe: AsyncPipe;

  constructor(private injector: Injector, private searchService: SearchService) {
    this.asyncPipe = new AsyncPipe(injector.get(ChangeDetectorRef));
  }

  ngOnDestroy() {
    this.asyncPipe.ngOnDestroy();
  }

  transform(value: any): any {
    return this.searchService.pageSearchContent$.pipe(
      map((v) => this.contentTransform(value, v))
    );
  }

  contentTransform(text: string, searchContent: any) {
    if (!searchContent) {
      return text;
    }
    let regOpt = new RegExp(/\+/, 'gi');
    regOpt = searchContent.replace(regOpt, '\\+');
    const re = new RegExp(regOpt, 'gi');
    return text.replace(re, '<mark>$&</mark>');
  }
}
