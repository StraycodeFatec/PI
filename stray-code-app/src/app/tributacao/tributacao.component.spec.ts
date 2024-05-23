import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TributacaoComponent } from './tributacao.component';

describe('TributacaoComponent', () => {
  let component: TributacaoComponent;
  let fixture: ComponentFixture<TributacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TributacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TributacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
