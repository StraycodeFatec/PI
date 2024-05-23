import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirEmpresaComponent } from './abrir-empresa.component';

describe('AbrirEmpresaComponent', () => {
  let component: AbrirEmpresaComponent;
  let fixture: ComponentFixture<AbrirEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbrirEmpresaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbrirEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
