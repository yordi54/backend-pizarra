import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserI } from '../../../models/user.interface';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  findByUsername(username: string): Observable<UserI[]> {
    return this.http.get<UserI[]>(
      `${environment.url}/users/find-by-username?username=${username}`
    );
  }

  create(user: UserI): Observable<UserI> {
    return this.http.post<UserI>(`${environment.url}/users`, user).pipe(
      tap((createdUser: UserI) =>
        this.snackBar.open(
          `Usuario ${createdUser.username} creado con éxito`,
          'Cerrar',
          {
            duration: 2000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          }
        )
      ),
      catchError((e) => {
        this.snackBar.open(
          `El usuario no pudo registrarse, debido a: ${e.error.message}`,
          'Close',
          {
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          }
        );
        return throwError(() => e);
      })
    );
  }
}
