import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title = 'Home';
  public rightIcon = 'fas fa-search';
  public deviceUrl = 'https://whatwebcando.today/';
  public sanitizer: DomSanitizer;
  constructor(sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }
  ngOnInit() {
  }

  public displayWebFrame(device: DeviceURL) {
    switch (device) {
      case DeviceURL.android: {
        this.deviceUrl = 'https://whatwebcando.today/';
        break;
      }
      case DeviceURL.ios: {
        this.deviceUrl = 'https://www.igen.fr/ios/2018/04/testez-les-progressive-web-apps-maintenant-quios-113-les-prend-en-charge-103525'
        break;
      }
      case DeviceURL.google: {
        this.deviceUrl = 'https://www.google.fr/';
        break;
      }
    }
  }



}

enum DeviceURL {
  android,
  ios,
  google
}
