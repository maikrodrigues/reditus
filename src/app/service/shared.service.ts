import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private selectedImageSubject = new BehaviorSubject<string | null>(null);
  selectedImage$ = this.selectedImageSubject.asObservable();

  setSelectedImage(image: string): void {
    this.selectedImageSubject.next(image);
  }

  getSelectedImage(): string | null {
    return this.selectedImageSubject.getValue();
  }
}
