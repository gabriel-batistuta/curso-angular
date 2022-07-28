import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilGabrielComponent } from './perfil-gabriel.component';

describe('PerfilGabrielComponent', () => {
  let component: PerfilGabrielComponent;
  let fixture: ComponentFixture<PerfilGabrielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilGabrielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilGabrielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
