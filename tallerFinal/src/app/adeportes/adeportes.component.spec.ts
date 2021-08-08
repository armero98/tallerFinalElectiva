import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdeportesComponent } from './adeportes.component';

describe('AdeportesComponent', () => {
  let component: AdeportesComponent;
  let fixture: ComponentFixture<AdeportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdeportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
