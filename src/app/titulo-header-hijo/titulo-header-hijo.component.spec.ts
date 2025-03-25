import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloHeaderHijoComponent } from './titulo-header-hijo.component';

describe('TituloHeaderHijoComponent', () => {
  let component: TituloHeaderHijoComponent;
  let fixture: ComponentFixture<TituloHeaderHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloHeaderHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloHeaderHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
