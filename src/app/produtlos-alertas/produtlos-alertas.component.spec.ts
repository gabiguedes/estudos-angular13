import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutlosAlertasComponent } from './produtlos-alertas.component';

describe('ProdutlosAlertasComponent', () => {
  let component: ProdutlosAlertasComponent;
  let fixture: ComponentFixture<ProdutlosAlertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutlosAlertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutlosAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
