import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() imageUrl!: string;
  @Output() deleteImage: EventEmitter<void> = new EventEmitter<void>();
  showDeleteIcon: boolean = false;
  showDownloadIcon: boolean = false;

  constructor(private imageService: ImageService) {}

  delImageClick(): void {
    this.deleteImage.emit();
  }
}
