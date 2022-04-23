import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggEmpresaComponent } from './agg-empresa.component';

describe('AggEmpresaComponent', () => {
  let component: AggEmpresaComponent;
  let fixture: ComponentFixture<AggEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
