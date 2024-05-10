import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbTooltipConfig, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxSpinnerModule } from 'ngx-spinner';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { FilterPipe } from './filter.pipe';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './_helpers/loader.interceptor';
import { Observables } from './_helpers/observables';
import { OutagesComponent } from './outages/outages.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TroubleshootingTreeComponent } from './troubleshooting-tree/troubleshooting-tree.component';
import { TroubleshootingSearchComponent } from './troubleshooting-search/troubleshooting-search.component';
import { TroubleshootingDashboardComponent } from './troubleshooting-dashboard/troubleshooting-dashboard.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    OutagesComponent,
    ContactFormComponent,
    TroubleshootingTreeComponent,
    TroubleshootingSearchComponent,
    TroubleshootingDashboardComponent,
    GoogleMapComponent,
  ],
  imports: [
    GoogleMapsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AppRoutingModule,
    NgbModule,
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    RecaptchaV3Module,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'always' },
    },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.captchaSiteKey},
    Observables,
    TroubleshootingTreeComponent,
    TroubleshootingSearchComponent,
    NgbTooltipConfig,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
