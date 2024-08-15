import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteoInstagramComponent } from './sorteo-instagram.component';

describe('SorteoInstagramComponent', () => {
  let component: SorteoInstagramComponent;
  let fixture: ComponentFixture<SorteoInstagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorteoInstagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorteoInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
