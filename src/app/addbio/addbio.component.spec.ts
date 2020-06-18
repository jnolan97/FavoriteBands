import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbioComponent } from './addbio.component';

describe('AddbioComponent', () => {
  let component: AddbioComponent;
  let fixture: ComponentFixture<AddbioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
