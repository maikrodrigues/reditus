import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SaveService } from 'src/app/service/save.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss'],
})
export class SaveComponent {
  constructor(
    private sharedService: SharedService,
    private saveService: SaveService,
    private router: Router
  ) {}

  saveImageLocally(): void {
    const selectedImage = this.sharedService.getSelectedImage();

    if (selectedImage) {
      this.saveService.saveImageLocally(selectedImage);
      this.router.navigate(['/']);
    }
  }

  // Método para exibir a imagem salva localmente
  displaySavedImage(): void {
    const fileName = 'imagem_salva.png';
    const imageDataUrl = localStorage.getItem(fileName);

    if (imageDataUrl) {
      // Exibe a imagem onde necessário
      console.log('Imagem salva:', imageDataUrl);
    }
  }
}
