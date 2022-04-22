import { Injectable } from '@angular/core';
import { PublicationGroupDtoShort } from '@common/generated-api/models/publication-group-dto-short';
import { AdminGroupsApiService } from '@common/generated-api/services/admin-groups-api.service';
import { BehaviorSubject, map } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllSegmentsService {
  private segmentsList = new BehaviorSubject<PublicationGroupDtoShort[]>(null);
  segmentsList$ = this.segmentsList.asObservable().pipe(filter(v => !!v));

  constructor(
    private adminGroupsApiService: AdminGroupsApiService
  ) { }

  loadSegmentsShortIfNeed() {
    if (this.segmentsList.getValue()) { return; }

    this.adminGroupsApiService.adminGetAllGroups().pipe(
      map(data => data.result.map(p => ({ id: p.id, name: p.name })))
    ).subscribe({
      next: data => this.segmentsList.next(data)
    })
  }

  updateList() {
    // Called each time a segment is created or updated
    // see SegmentItemService
    if (!this.segmentsList.getValue()) { return; }
    this.loadSegmentsShortIfNeed();
  }
}
