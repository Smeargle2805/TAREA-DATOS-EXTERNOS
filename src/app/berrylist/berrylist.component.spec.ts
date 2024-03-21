import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerrylistComponent } from './berrylist.component';

describe('BerrylistComponent', () => {
  let component: BerrylistComponent;
  let fixture: ComponentFixture<BerrylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BerrylistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BerrylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
