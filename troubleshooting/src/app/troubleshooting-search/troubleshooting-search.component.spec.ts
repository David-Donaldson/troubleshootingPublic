import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleshootingSearchComponent } from './troubleshooting-search.component';

describe('TroubleshootingSearchComponent', () => {
  let component: TroubleshootingSearchComponent;
  let fixture: ComponentFixture<TroubleshootingSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroubleshootingSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroubleshootingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
