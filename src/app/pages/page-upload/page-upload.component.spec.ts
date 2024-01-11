import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUploadComponent } from './page-upload.component';

describe('PageUploadComponent', () => {
  let component: PageUploadComponent;
  let fixture: ComponentFixture<PageUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageUploadComponent]
    });
    fixture = TestBed.createComponent(PageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
