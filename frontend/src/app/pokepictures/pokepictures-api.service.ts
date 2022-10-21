import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../env';
import { Pokepicture } from './pokepicture.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PokepicturesApiService {
  constructor(private http: HttpClient) {}

  public STORAGE = 'storage';
  //get all pokepictures
  getPokepictures(): Observable<Pokepicture[]> {
    return this.http.get<Pokepicture[]>(`${API_URL}/pokepictures`).pipe(
      catchError((err) => {
        throw 'error!';
      })
    );
  }

  uploadPokepicture(picture: any): Observable<any> {
    return this.http
      .post<any>(`${API_URL}` + this.STORAGE + `/uploadFile`, picture)
      .pipe(
        catchError((err) => {
          throw 'error!';
        })
      );
  }
}
