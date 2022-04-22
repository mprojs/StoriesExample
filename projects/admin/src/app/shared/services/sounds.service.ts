import { Injectable } from '@angular/core';
import { AudioCreateForm } from '@common/generated-api/models/audio-create-form';
import { AudioLibrarySearchForm } from '@common/generated-api/models/audio-library-search-form';
import { AudioUpdateForm } from '@common/generated-api/models/audio-update-form';
import { AdminAudioApiService } from '@common/generated-api/services/admin-audio-api.service';
import { SoundType } from '@shared/components/files/shared-files/add-sound/add-sound.component';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoundsService {

  constructor(
    private adminAudioApiService: AdminAudioApiService
  ) {
  }

  get(id: number) {
    return this.adminAudioApiService.adminGetAudio({ id }).pipe(
      map(data => data.result)
    );
  }

  search(body: AudioLibrarySearchForm) {
    return this.adminAudioApiService.adminSearchAudioLibrary({ body }).pipe(
      map(data => data.result)
    );
  }

  create(body: AudioCreateForm) {
    return this.adminAudioApiService.adminCreateAudio({ body }).pipe(
      map(data => data.result)
    );
  }

  update(id: number, body: AudioUpdateForm) {
    return this.adminAudioApiService.adminUpdateAudio({ id, body }).pipe(
      map(data => data.result)
    );
  }

  delete(id: number) {
    return this.adminAudioApiService.adminDeleteAudio({ id });
  }

  convertSoundType(type: SoundType): AudioLibrarySearchForm['type'] {
    return type === 'melody' ? 'BGM' : 'SOUND';
  }
}
