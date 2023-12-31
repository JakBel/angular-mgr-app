import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Answer {
  name: string;
  age: number;
  email: string;
  password: string;
}

@Component({
  selector: 'app-forms-td',
  templateUrl: './forms-td.component.html',
  styleUrls: ['./forms-td.component.css'],
})
export class FormsTdComponent {
  @ViewChild('f', { static: false }) signupForm: NgForm;

  isShown = false;
  answer: Answer = {
    name: '',
    age: 0,
    email: '',
    password: '',
  };

  onSubmit() {
    this.answer.name = this.signupForm.value.name;
    this.answer.age = this.signupForm.value.age;
    this.answer.email = this.signupForm.value.email;
    this.answer.password = this.signupForm.value.password;

    this.isShown = true;
    this.signupForm.resetForm();
  }
}
