import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeammateListComponent } from './my-teammate-list.component';

describe('MyTeammateListComponent', () => {
  let component: MyTeammateListComponent;
  let fixture: ComponentFixture<MyTeammateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeammateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeammateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
