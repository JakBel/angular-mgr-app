import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ImageControlService } from './image-control.service';
import { Forms } from './forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css'],
})
export class FormsReactiveComponent implements OnInit {
  imageForm: FormGroup;

  constructor(
    private imageControlService: ImageControlService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.imageForm = new FormGroup({
      name: new FormControl(null, [Validators.required, this.lengthOfName(20)]),
      imageURL: new FormControl(null, Validators.required),
      rating: new FormControl(0, [
        Validators.required,
        Validators.min(1),
        Validators.max(10),
      ]),
    });
  }

  onSubmit() {
    let formObject: Forms = this.imageForm.value;
    formObject.cost = this.imageControlService.countCost(formObject.name);
    this.imageControlService.addFormData(formObject);
    this.imageForm.reset({
      rating: 0,
    });
    // console.log(this.imageControlService.getFormData());
    this.imageControlService.showSuccess();
  }

  lengthOfName(maxLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value;

      if (value && value.length > maxLength) {
        return { maxLengthError: true };
      }

      return null;
    };
  }
}
