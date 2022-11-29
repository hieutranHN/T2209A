import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanHangComponent } from './ban-hang.component';

describe('BanHangComponent', () => {
  let component: BanHangComponent;
  let fixture: ComponentFixture<BanHangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanHangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
