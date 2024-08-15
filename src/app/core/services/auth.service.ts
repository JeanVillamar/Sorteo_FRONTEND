import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://sistemasorteos.onrender.com/api/facebook/photos';
  private userNameUrl = 'https://sistemasorteos.onrender.com/api/user-name'; 
  private savePhotoNameUrl = 'https://sistemasorteos.onrender.com/api/save-photo-name'; // Nueva URL
  private photoNamesUrl = 'https://sistemasorteos.onrender.com/api/photo-names';

  constructor() { }

  getPhotos(url: string = this.apiUrl): Observable<any> {
    return from(fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
    ).pipe(
      catchError(this.handleError)
    );
  }
  getUserName(): Observable<{ name: string }> {
    return from(fetch(this.userNameUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
    ).pipe(
      catchError(this.handleError)
    );
  }

  savePhotoName(photoId: string): Observable<any> {
    return from(fetch(this.savePhotoNameUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ photoId })
    }).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })).pipe(
      catchError(this.handleError)
    );
  }

  getPhotoNames(): Observable<string[]> {
    return from(fetch(this.photoNamesUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('Error en la solicitud:', error);
    let errorMessage = '';
    if (error instanceof Error) {
      errorMessage = `Error: ${error.message}`;
    } else {
      errorMessage = `Error desconocido`;
    }
    return throwError(errorMessage);
  }
}
