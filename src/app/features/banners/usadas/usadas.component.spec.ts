import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsadasComponent } from './usadas.component';

describe('UsadasComponent', () => {
  let component: UsadasComponent;
  let fixture: ComponentFixture<UsadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
