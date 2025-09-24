import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoItem } from './auto-item';

describe('AutoItem', () => {
  let component: AutoItem;
  let fixture: ComponentFixture<AutoItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
