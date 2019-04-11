import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cipher',
  templateUrl: './cipher.component.html',
  styleUrls: ['./cipher.component.css']
})
export class CipherComponent implements OnInit {
  key = 0;
  unencryptedText: string = '';
  encryptedText: string = '';
  i = 0;
  constructor() { }

  ngOnInit() {
  }

 
  }

}
