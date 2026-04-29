import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraccionDomicilioFormComponent } from './extraccion-domicilio-form.component';

describe('ExtraccionDomicilioFormComponent', () => {
  let component: ExtraccionDomicilioFormComponent;
  let fixture: ComponentFixture<ExtraccionDomicilioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraccionDomicilioFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExtraccionDomicilioFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
