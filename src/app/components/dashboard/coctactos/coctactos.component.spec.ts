import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctactosComponent } from './coctactos.component';

describe('CoctactosComponent', () => {
  let component: CoctactosComponent;
  let fixture: ComponentFixture<CoctactosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoctactosComponent]
    });
    fixture = TestBed.createComponent(CoctactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
