import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  isActive = true;

  constructor(private router: Router, private sharedService: SharedService) {}

  onFileSelected(): void {
    if (this.fileInput.nativeElement.files) {
      const file = this.fileInput.nativeElement.files[0];

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imageDataUrl = e.target.result;
        this.sharedService.setSelectedImage(imageDataUrl);
      };
      reader.readAsDataURL(file);
      this.isActive = false;
    }
  }
}
