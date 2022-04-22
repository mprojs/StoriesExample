import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  HostListener,
  Input,
  OnInit,
  QueryList,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'app-actions-menu',
  templateUrl: './actions-menu.component.html',
  styleUrls: ['./actions-menu.component.scss'],
})
export class ActionsMenuComponent implements OnInit, AfterViewInit {
  @ContentChildren('action') actionTemplateRefs: QueryList<TemplateRef<any>>;
  @ContentChildren(TemplateRef) templateRefs: QueryList<TemplateRef<any>>;
  /**
   * if onlyMarkedTemplates passed and true, only templates with #action attribute will be added to list,
   * it is usable when you want to use ng-container or other things, which have TemplateRef under the hood
   */
  @Input() onlyMarkedTemplates = false;
  @Input() triggerIntoTable: boolean;
  showMenuButton = true;

  constructor(
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.onlyMarkedTemplates) {
      this.subscribeToListChangings(this.actionTemplateRefs);
    } else {
      this.subscribeToListChangings(this.templateRefs);
    }
  }

  @HostListener('click', ['$event'])
  onClick(e) {
    e.stopPropagation();
  }

  private subscribeToListChangings(list: QueryList<TemplateRef<any>>) {
    if (list) {
      this.showMenuButton = !!list.length;
      this.cd.detectChanges();
    }
    if (list?.changes) {
      list.changes.subscribe({
        next: (data) => {
          if (data.length) {
            this.showMenuButton = !!list.length;
            this.cd.detectChanges();
          }
        }
      });
    }
  }
}
