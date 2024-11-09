import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacoesContatoPage } from './informacoes-contato.page';

describe('InformacoesContatoPage', () => {
  let component: InformacoesContatoPage;
  let fixture: ComponentFixture<InformacoesContatoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesContatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
