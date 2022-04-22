import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { httpInterceptorProviders } from '@shared/interceptors/http-interceptors';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CpLayoutComponent } from './components/cp-layout/cp-layout.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [ AppComponent, CpLayoutComponent, NavComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ProgressBarModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  providers: [
    ...httpInterceptorProviders,
    MessageService,
    ConfirmationService,
  ],
  exports: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
