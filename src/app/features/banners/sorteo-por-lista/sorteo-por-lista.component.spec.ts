import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteoPorListaComponent } from './sorteo-por-lista.component';

describe('SorteoPorListaComponent', () => {
  let component: SorteoPorListaComponent;
  let fixture: ComponentFixture<SorteoPorListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorteoPorListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorteoPorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
