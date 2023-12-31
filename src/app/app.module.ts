import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CounterComponent } from './counter/counter.component';
import { FormsTdComponent } from './forms-td/forms-td.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';
import { FormsImageComponent } from './forms-reactive/forms-image/forms-image.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { calculatorReducer } from './store/calculator/calculator.reducer';
import { CalculatorEffects } from './store/calculator/calculator.effects';
import { HttpRequestComponent } from './http-request/http-request.component';
import { HttpImageComponent } from './http-request/http-image/http-image.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    CounterComponent,
    FormsTdComponent,
    FormsReactiveComponent,
    FormsImageComponent,
    CalculatorComponent,
    HttpRequestComponent,
    HttpImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      calculator: calculatorReducer,
    }),
    EffectsModule.forRoot([CalculatorEffects]),
    HttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
