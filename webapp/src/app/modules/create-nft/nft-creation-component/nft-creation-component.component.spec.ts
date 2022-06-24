import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftCreationComponentComponent } from './nft-creation-component.component';

describe('NftCreationComponentComponent', () => {
  let component: NftCreationComponentComponent;
  let fixture: ComponentFixture<NftCreationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftCreationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftCreationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
