import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralModuleComponent } from './general-module.component';

describe('GeneralModuleComponent', () => {
  let component: GeneralModuleComponent;
  let fixture: ComponentFixture<GeneralModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
