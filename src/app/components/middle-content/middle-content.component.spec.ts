import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleContentComponent } from './middle-content.component';

describe('MiddleContentComponent', () => {
  let component: MiddleContentComponent;
  let fixture: ComponentFixture<MiddleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiddleContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
