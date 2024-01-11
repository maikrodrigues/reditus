import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = 'http://localhost:3000/angular';

  constructor(private http: HttpClient) {}

  getImages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  uploadImage(data: FormData): Observable<any> {
    console.log(data)
    return this.http.post<any>(this.apiUrl, data);
  }
}
