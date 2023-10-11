import { NgModule }                            from '@angular/core';
import { BrowserModule }                       from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule }             from '@angular/platform-browser/animations';
import { MatToolbarModule }                    from '@angular/material/toolbar';
import { MatMenuModule }                       from '@angular/material/menu';
import { MatIconModule }                       from '@angular/material/icon';
import { MatButtonModule }                     from '@angular/material/button';
import { NgOptimizedImage }                    from '@angular/common';

import { StoreModule }        from '@ngrx/store';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';
import { TokenInterceptor }        from './commons/interceptors/token.interceptor';
import { UnauthorizedInterceptor } from './commons/interceptors/unauthorized.interceptor';
import { LoggedNavbarComponent }   from './shared/components/navbar/logged-navbar/logged-navbar.component';
import { GhostNavbarComponent }    from './shared/components/navbar/ghost-navbar/ghost-navbar.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    NgOptimizedImage,
    IonicStorageModule.forRoot(),
    StoreModule.forRoot({}, {}),
    LoggedNavbarComponent,
    GhostNavbarComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
