import { Component, OnInit } from '@angular/core';
import { Breed, HttpRequestService } from './http-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css'],
})
export class HttpRequestComponent implements OnInit {
  message: Breed[];
  isLoading: boolean = false;

  constructor(
    private httpRequestService: HttpRequestService,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.message = JSON.parse(localStorage.getItem('dogs'));

    setTimeout(() => {
      localStorage.removeItem('dogs');
    }, 60000);
  }

  fetchImages() {
    this.spinner.show();

    this.httpRequestService.fetchData().subscribe({
      next: (data) => {
        this.message = data.map((dog) => ({
          image: dog.image || 'https://via.placeholder.com/150?text=No+Image',
          breed: dog.breed,
        }));

        this.spinner.hide();
        this.saveToLocalStorage(this.message);
      },
      error: (err) => {
        console.error('Error during content download', err);
      },
    });
  }

  imageHandlerError(dog: Breed) {
    dog.image = 'https://via.placeholder.com/150?text=No+Image';
    this.updateLocalStorage(dog);
  }

  imageClick(breed: Breed) {
    this.httpRequestService.currentBreed = breed;
    this.router.navigate([breed.breed], { relativeTo: this.route });
  }

  private saveToLocalStorage(data: Breed[]) {
    localStorage.setItem('dogs', JSON.stringify(data));
  }

  // Dogs with no image handler
  private updateLocalStorage(currentDog: Breed) {
    const dogs: Breed[] = JSON.parse(localStorage.getItem('dogs'));
    const breed = dogs.map((dog) => {
      if (dog.breed === currentDog.breed) {
        return {
          ...dog,
          image: 'https://via.placeholder.com/150?text=No+Image',
        };
      } else {
        return dog;
      }
    });

    localStorage.setItem('dogs', JSON.stringify(breed));
  }
}
