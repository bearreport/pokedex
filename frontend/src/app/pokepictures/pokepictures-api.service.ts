import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../env';
import { Pokepicture } from './pokepicture.model';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class PokepicturesApiService {
  constructor(private http: HttpClient) {}

  private STORAGE = 'storage';
  private API = 'api';
  //get all pokepictures
  getPokepictures(): Observable<Pokepicture[]> {
    return this.http.get<Pokepicture[]>(`${API_URL}/pokepictures/`).pipe(
      catchError((err) => {
        throw 'error!';
      })
    );
  }

  uploadPokepictureToS3(picture: any): Observable<any> {
    let form_data = new FormData();
    form_data.append('file', picture, picture.name);

    return this.http.post(
      `${API_URL}` + this.STORAGE + `/uploadFile`,
      form_data,
      { responseType: 'text' }
    );
  }

  updateDbWithPokepicture(image_url: string, pokeid: number): void {
    const pokepicture: Pokepicture = {
      pokeid: pokeid,
      image_url: image_url,
      created_at: new Date().getDate(),
      updated_at: new Date().getDate(),
      lastUpdatedBy: 'HTTP POST REQUEST',
    };

    console.log('updated db fired');

    this.http.post(`${API_URL}` + this.API + `/pokepictures/`, pokepicture);
  }
}
