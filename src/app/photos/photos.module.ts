import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PhotoComponent, PhotoListComponent, PhotoFormComponent],
  imports: [HttpClientModule, CommonModule],
})
export class PhotosModule {}
