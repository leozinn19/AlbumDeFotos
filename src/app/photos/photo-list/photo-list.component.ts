import { Component } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent {
  photos: any;

  constructor(private photoService: PhotoService) {}
  ngOnInit(): void {
    this.photoService
      .listFromUser('flavio')
      .subscribe((photos) => (this.photos = photos));
  }
}
