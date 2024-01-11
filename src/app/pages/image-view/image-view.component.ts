import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent implements OnInit {
  router = "/upload";
  imageUrl: any[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.imageService.getImages().subscribe(
      (data) => {
        this.imageUrl = data;
      },
      (error) => {
        console.error('Erro ao carregar imagens', error);
      }
    );
  }
}
