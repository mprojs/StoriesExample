import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StoryAdminDto } from '@common/generated-api/models/story-admin-dto';
import { StoryDataService } from '@modules/stories/services/story-data.service';
import { ControlsOf, FormControl, FormGroup } from '@ngneat/reactive-forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { RouteParams } from '@shared/consts/route.consts';
import { SnackbarService } from '@shared/services/snackbar.service';

type StoryFormGroup = Pick<StoryAdminDto, 'name' | 'desc' | 'status'>;

@UntilDestroy()
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: [ './story.component.scss' ]
})
export class StoryComponent implements OnInit {
  form: FormGroup<ControlsOf<StoryFormGroup>>;
  statuses: StoryAdminDto['status'][] = [ 'DRAFT', 'PUBLISHED', 'ARCHIVED' ];

  constructor(
    private storyDataService: StoryDataService,
    private activatedRoute: ActivatedRoute,
    private snackbarService: SnackbarService
  ) {
    this.form = new FormGroup<ControlsOf<StoryFormGroup>>({
      name: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      status: new FormControl('DRAFT')
    });
  }

  ngOnInit(): void {
    this.storyDataService.item$.pipe(untilDestroyed(this)).subscribe({
      next: (data) => {
        this.form.patchValue(data);
      }
    });

    this.storyDataService.load(this.activatedRoute.snapshot.params[RouteParams.id]);
  }

  saveClick() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      this.snackbarService.showMessage('Please, check the form')
      return;
    } else {
      this.storyDataService.save(this.form.value, true);
    }
  }
}
