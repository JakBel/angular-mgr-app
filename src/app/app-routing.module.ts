import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CounterComponent } from './counter/counter.component';
import { FormsTdComponent } from './forms-td/forms-td.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';
import { FormsImageComponent } from './forms-reactive/forms-image/forms-image.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { HttpImageComponent } from './http-request/http-image/http-image.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'forms-td', component: FormsTdComponent },
  { path: 'forms-reactive', component: FormsReactiveComponent },
  {
    path: 'forms-reactive/images',
    component: FormsImageComponent,
  },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'http-request', component: HttpRequestComponent },
  { path: 'http-request/:breed', component: HttpImageComponent },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: { message: 'Page not found' },
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
