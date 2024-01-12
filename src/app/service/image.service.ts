import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = 'https://api.casadegoa.org/';

  constructor(private http: HttpClient) {}

  getImages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'angular/view');
  }

  uploadImage(data: FormData): Observable<any> {
    console.log(data)
    return this.http.post<any>(this.apiUrl, data);
  }

  deleteImage(imageId: number): Observable<any> {
    // Suponha que o endpoint para deletar seja algo como /angular/:id
    const deleteUrl = `${this.apiUrl}angular/${imageId}`;
    return this.http.delete<any>(deleteUrl);
  }
}
