import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

interface Dogs {
  message: string[];
  status: string;
}

export interface Breed {
  image: string;
  breed: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  currentBreed: Breed;

  constructor(private http: HttpClient) {}

  fetchData() {
    return this.http
      .get<Dogs>('https://dog.ceo/api/breeds/image/random/12')
      .pipe(
        map((values: Dogs) => {
          return values.message.map((image: string) => {
            const parts = image.split('/');
            const breed = parts[parts.length - 2];
            return { image, breed };
          });
        })
      );
  }
}
