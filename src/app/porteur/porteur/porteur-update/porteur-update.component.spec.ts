import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteurUpdateComponent } from './porteur-update.component';

describe('PorteurUpdateComponent', () => {
  let component: PorteurUpdateComponent;
  let fixture: ComponentFixture<PorteurUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorteurUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorteurUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
