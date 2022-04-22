import { ActivatedRoute, Router } from '@angular/router';
import { RouteParamValues } from '@shared/consts/route.consts';
import { SnackbarService } from '@shared/services/snackbar.service';
import { BehaviorSubject, filter, Observable } from 'rxjs';

export abstract class BaseDataService<T extends { id: number }, U> {
  itemBS$ = new BehaviorSubject<T>(null);
  item$ = this.itemBS$.asObservable().pipe(filter(v => !!v));
  abstract snackbarService: SnackbarService;
  private router: Router;
  private route: ActivatedRoute;

  protected constructor() {
  }

  abstract _getDefaultItem(): T;

  abstract _loadItem(id: number): Observable<T>;

  abstract _createItem(form: U, params?: any): Observable<T>;

  abstract _updateItem(id: number, form: U): Observable<T>;

  public load(id: number | string) {
    if (id === RouteParamValues.new) {
      this.itemBS$.next(this._getDefaultItem());
      return;
    }
    const idNum = +id;
    if (this.itemBS$.getValue()?.id && this.itemBS$.getValue().id !== idNum) {
      this.itemBS$.next(null);
    }
    this._loadItem(idNum).subscribe({
      next: (data) => {
        this.itemBS$.next(data);
      }
    });
  }

  public initPageComponent(router: Router, route: ActivatedRoute) {
    this.router = router;
    this.route = route;
  }

  public save(form: U, message?: string | boolean) {
    const id = this.itemBS$.getValue()?.id;
    if (id) {
      this.update(id, form, message);
    } else {
      this.create(form, message);
    }
  }

  public clear() {
    this.itemBS$.next(null);
  }

  protected create(form: U, params: any, message?: string | boolean) {
    this._createItem(form, params).subscribe({
      next: (data) => {
        this.itemBS$.next(data);
        if (message && this.snackbarService) {
          const messageText = message === true ? 'Saved successfully' : message;
          this.snackbarService.showMessage(messageText);
        }
        if (this.router && this.route) {
          this.router.navigate([ '../' + data.id ], { relativeTo: this.route }).then();
        } else {
          console.error('Router not found');
        }
      }
    });
  }

  protected update(id: number, form: U, message?: string | boolean) {
    this._updateItem(id, form).subscribe({
      next: (data) => {
        this.itemBS$.next(data);
        if (message && this.snackbarService) {
          const messageText = message === true ? 'Saved successfully' : message;
          this.snackbarService.showMessage(messageText);
        }
      }
    });
  }

}
