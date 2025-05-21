import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminClockinComponent } from './superadmin-clockin.component';

describe('SuperadminClockinComponent', () => {
  let component: SuperadminClockinComponent;
  let fixture: ComponentFixture<SuperadminClockinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperadminClockinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminClockinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
