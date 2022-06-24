import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationComponentComponent } from './creation-component.component';

describe('CreationComponentComponent', () => {
  let component: CreationComponentComponent;
  let fixture: ComponentFixture<CreationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
