import { Component, OnInit } from '@angular/core';
import { ImageControlService } from '../image-control.service';
import { Forms } from '../forms';

@Component({
  selector: 'app-forms-image',
  templateUrl: './forms-image.component.html',
  styleUrls: ['./forms-image.component.css'],
})
export class FormsImageComponent implements OnInit {
  imageArray: Forms[];

  constructor(private imageControlService: ImageControlService) {}

  ngOnInit(): void {
    this.imageArray = this.imageControlService.getFormData();
  }
}
