import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  constructor(private http: HttpClient) {}
  saveImageLocally(imageDataUrl: string): void {
    const timestamp = new Date().getTime();
    const filename = `imagem_${timestamp}.png`;
    const blob = this.base64ToBlob(imageDataUrl.split(',')[1]);
    const formData = new FormData();
    formData.append('imagem', blob, filename);

    // Use um endpoint no seu servidor para salvar a imagem no diretório desejado
    this.http.post('http://localhost:3000/angular', formData).subscribe(
      (response) => {
        console.log('Imagem salva com sucesso:', response);
      },
      (error) => {
        console.error('Erro ao salvar a imagem:', error);
      }
    );
  }

  private base64ToBlob(data: string): Blob {
    const binaryString = window.atob(data);
    const arrayBuffer = new ArrayBuffer(binaryString.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < binaryString.length; i++) {
      uint8Array[i] = binaryString.charCodeAt(i);
    }

    return new Blob([uint8Array], { type: 'application/octet-stream' });
  }
}
