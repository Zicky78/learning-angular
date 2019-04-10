import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  username = 'username';
  allowClearUsername = true;
  constructor() {
    
   }

  ngOnInit() {
  }

  onClearUsername() {
    this.username = '';
    this.allowClearUsername = false;
  }
  checkString() {
    this.allowClearUsername = this.username != '';
  }
  
}
