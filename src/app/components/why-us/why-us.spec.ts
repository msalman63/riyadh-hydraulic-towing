import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUS } from './why-us';

describe('WhyUS', () => {
  let component: WhyUS;
  let fixture: ComponentFixture<WhyUS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyUS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyUS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
