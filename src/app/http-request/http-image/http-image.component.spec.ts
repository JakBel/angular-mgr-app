import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpImageComponent } from './http-image.component';

describe('HttpImageComponent', () => {
  let component: HttpImageComponent;
  let fixture: ComponentFixture<HttpImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpImageComponent]
    });
    fixture = TestBed.createComponent(HttpImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
