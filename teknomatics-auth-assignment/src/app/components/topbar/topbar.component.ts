import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  @Input() userEmail = '';
  @Input() isLoggedIn = false;
  @Output() logoutEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onLogout() {
    this.logoutEvent.emit();
  }
}
