import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEstabelecimentoComponent } from './editar-estabelecimento.component';

describe('EditarEstabelecimentoComponent', () => {
  let component: EditarEstabelecimentoComponent;
  let fixture: ComponentFixture<EditarEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEstabelecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
