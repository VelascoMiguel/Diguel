import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectContentComponent } from './proyect-content.component';

describe('ProyectContentComponent', () => {
  let component: ProyectContentComponent;
  let fixture: ComponentFixture<ProyectContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProyectContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
