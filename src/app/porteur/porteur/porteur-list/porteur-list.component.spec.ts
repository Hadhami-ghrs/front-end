import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteurListComponent } from './porteur-list.component';

describe('PorteurListComponent', () => {
  let component: PorteurListComponent;
  let fixture: ComponentFixture<PorteurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorteurListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorteurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
