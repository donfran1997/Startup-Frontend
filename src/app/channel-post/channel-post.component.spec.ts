import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelPostComponent } from './channel-post.component';

describe('ChannelPostComponent', () => {
  let component: ChannelPostComponent;
  let fixture: ComponentFixture<ChannelPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
