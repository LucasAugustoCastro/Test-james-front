import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEstabelicimentosComponent } from './listar-estabelicimentos.component';

describe('ListarEstabelicimentosComponent', () => {
  let component: ListarEstabelicimentosComponent;
  let fixture: ComponentFixture<ListarEstabelicimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEstabelicimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEstabelicimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
