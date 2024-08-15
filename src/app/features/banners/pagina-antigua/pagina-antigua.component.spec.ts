import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAntiguaComponent } from './pagina-antigua.component';

describe('PaginaAntiguaComponent', () => {
  let component: PaginaAntiguaComponent;
  let fixture: ComponentFixture<PaginaAntiguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAntiguaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAntiguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
