import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserI } from '../../../models/user.interface';
import { Observable, tap } from 'rxjs';
import { LoginResponseI } from '../../../models/login-response.interface';
import { environment } from '../../../../environments/environment.prod';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar, private jwtService: JwtHelperService) {}

  login(user: UserI): Observable<LoginResponseI> {
    return this.http
      .post<LoginResponseI>(`${environment.url}/users/login`, user)
      .pipe(
        tap((response: LoginResponseI) =>
          localStorage.setItem('session_token', response.access_token)
        ),
        tap(() =>
          this.snackBar.open('Inicio de sesión exitoso', 'Cerrar', {
            duration: 2000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          })
        )
      );
  }

  getLoggedInUser() {
    const decodedToken = this.jwtService.decodeToken();
    return decodedToken.user;
  }
}
