// shared.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private temporaryData: any;

  setTemporaryData(data: any): void {
    this.temporaryData = data;
  }

  getTemporaryData(): any {
    return this.temporaryData;
  }
}
