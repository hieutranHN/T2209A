import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhvienComponent } from './sinhvien.component';

describe('SinhvienComponent', () => {
  let component: SinhvienComponent;
  let fixture: ComponentFixture<SinhvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinhvienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
