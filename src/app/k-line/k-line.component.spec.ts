import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KLineComponent } from './k-line.component';

describe('KLineComponent', () => {
  let component: KLineComponent;
  let fixture: ComponentFixture<KLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
