import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcDevicesComponent } from './pc-devices.component';

describe('PcDevicesComponent', () => {
  let component: PcDevicesComponent;
  let fixture: ComponentFixture<PcDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcDevicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
