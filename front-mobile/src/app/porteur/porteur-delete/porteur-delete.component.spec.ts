import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteurDeleteComponent } from './porteur-delete.component';

describe('PorteurDeleteComponent', () => {
  let component: PorteurDeleteComponent;
  let fixture: ComponentFixture<PorteurDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorteurDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorteurDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
