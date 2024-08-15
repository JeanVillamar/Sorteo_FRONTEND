import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisSorteosComponent } from './mis-sorteos.component';

describe('MisSorteosComponent', () => {
  let component: MisSorteosComponent;
  let fixture: ComponentFixture<MisSorteosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisSorteosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisSorteosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
