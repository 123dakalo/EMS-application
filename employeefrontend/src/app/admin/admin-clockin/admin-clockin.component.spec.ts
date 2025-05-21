import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClockinComponent } from './admin-clockin.component';

describe('AdminClockinComponent', () => {
  let component: AdminClockinComponent;
  let fixture: ComponentFixture<AdminClockinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminClockinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminClockinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
