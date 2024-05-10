import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleshootingTreeComponent } from './troubleshooting-tree.component';

describe('TroubleshootingTreeComponent', () => {
  let component: TroubleshootingTreeComponent;
  let fixture: ComponentFixture<TroubleshootingTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroubleshootingTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroubleshootingTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
