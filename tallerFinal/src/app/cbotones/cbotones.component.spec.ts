import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbotonesComponent } from './cbotones.component';

describe('CbotonesComponent', () => {
  let component: CbotonesComponent;
  let fixture: ComponentFixture<CbotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbotonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
