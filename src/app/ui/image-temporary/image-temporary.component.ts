import { Component, EventEmitter, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-image-temporary',
  templateUrl: './image-temporary.component.html',
  styleUrls: ['./image-temporary.component.scss']
})
export class ImageTemporaryComponent implements OnInit {
  // file: File | null = null;

  selectedImage: string | null = null;

  constructor(private sharedService: SharedService) {}

  imageCleared: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    this.sharedService.selectedImage$.subscribe(image => {
      this.selectedImage = image;
    });
  }

  clearImage(): void {
    this.selectedImage = null;
    // Emita um evento para notificar componentes que a imagem foi removida
    this.imageCleared.emit();
  }
}
