import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Forms } from './forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ImageControlService {
  private imageDataSubject = new BehaviorSubject<Forms[]>([]);

  constructor(private toastr: ToastrService) {}

  addFormData(data: Forms) {
    const currentData = this.imageDataSubject.value;
    const newData = [...currentData, data];
    this.imageDataSubject.next(newData);
  }

  getFormData() {
    return this.imageDataSubject.value;
  }

  countCost(word: string) {
    const len = word.length;
    return Math.floor(Math.pow(len, Math.random() * (10 - 2) + 2));
  }

  showSuccess() {
    this.toastr.success('All data has been saved', 'Forms info', {
      closeButton: true,
      timeOut: 4000,
      progressBar: true,
      progressAnimation: 'increasing',
    });
  }
}
