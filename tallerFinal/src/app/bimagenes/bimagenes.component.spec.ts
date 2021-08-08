import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BimagenesComponent } from './bimagenes.component';

describe('BimagenesComponent', () => {
  let component: BimagenesComponent;
  let fixture: ComponentFixture<BimagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BimagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BimagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
