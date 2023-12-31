import { Component, OnInit } from '@angular/core';
import { Breed, HttpRequestService } from '../http-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-http-image',
  templateUrl: './http-image.component.html',
  styleUrls: ['./http-image.component.css'],
})
export class HttpImageComponent implements OnInit {
  breed: Breed;

  constructor(
    private httpRequestService: HttpRequestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.breed = this.httpRequestService.currentBreed;
  }

  goBack() {
    this.router.navigate(['http-request']);
  }
}
