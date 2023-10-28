import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DiscoveryPage } from './discovery.page';

describe('DiscoveryPage', () => {
  let component: DiscoveryPage;
  let fixture: ComponentFixture<DiscoveryPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(DiscoveryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
