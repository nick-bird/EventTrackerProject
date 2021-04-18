import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeLogListComponent } from './practice-log-list.component';

describe('PracticeLogListComponent', () => {
  let component: PracticeLogListComponent;
  let fixture: ComponentFixture<PracticeLogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeLogListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
