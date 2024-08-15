import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteoActualComponent } from './sorteo-actual.component';

describe('SorteoActualComponent', () => {
  let component: SorteoActualComponent;
  let fixture: ComponentFixture<SorteoActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorteoActualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorteoActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
