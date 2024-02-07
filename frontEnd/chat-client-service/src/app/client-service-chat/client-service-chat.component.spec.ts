import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServiceChatComponent } from './client-service-chat.component';

describe('ClientServiceChatComponent', () => {
  let component: ClientServiceChatComponent;
  let fixture: ComponentFixture<ClientServiceChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientServiceChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientServiceChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
