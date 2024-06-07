import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicaComponent } from './periodica.component';

describe('PeriodicaComponent', () => {
  let component: PeriodicaComponent;
  let fixture: ComponentFixture<PeriodicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriodicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
