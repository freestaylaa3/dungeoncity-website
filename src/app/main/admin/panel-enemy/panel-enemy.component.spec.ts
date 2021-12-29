import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelEnemyComponent } from './panel-enemy.component';

describe('PanelEnemyComponent', () => {
  let component: PanelEnemyComponent;
  let fixture: ComponentFixture<PanelEnemyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelEnemyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelEnemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
