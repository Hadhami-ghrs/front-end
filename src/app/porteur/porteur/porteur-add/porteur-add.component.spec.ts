import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteurAddComponent } from './porteur-add.component';

describe('PorteurAddComponent', () => {
  let component: PorteurAddComponent;
  let fixture: ComponentFixture<PorteurAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorteurAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorteurAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
