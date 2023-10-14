import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';

import { tokenGetter } from './config/config';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    JwtModule.forRoot({ config: { tokenGetter: tokenGetter, allowedDomains: ['backend-pizarra.azurewebsites.net'] } }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
