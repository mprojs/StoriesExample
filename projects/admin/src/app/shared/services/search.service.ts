import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  pageSearchContent$ = new BehaviorSubject<string>(null);

  constructor() { }
}
