import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTemporaryComponent } from './image-temporary.component';

describe('ImageTemporaryComponent', () => {
  let component: ImageTemporaryComponent;
  let fixture: ComponentFixture<ImageTemporaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageTemporaryComponent]
    });
    fixture = TestBed.createComponent(ImageTemporaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
