import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrelloMini } from './carrello-mini';

describe('CarrelloMini', () => {
  let component: CarrelloMini;
  let fixture: ComponentFixture<CarrelloMini>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrelloMini]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrelloMini);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
