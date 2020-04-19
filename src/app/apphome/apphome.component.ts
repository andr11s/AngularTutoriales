import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apphome',
  templateUrl: './apphome.component.html',
  styleUrls: ['./apphome.component.css']
})
export class ApphomeComponent implements OnInit {

  public carousel: any = [
    { "codigo": 1, "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2234709.jpg&f=1&nofb=1" },
    { "codigo": 2, "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F06%2FHD-Technology-Photo.jpg&f=1&nofb=1" },
    { "codigo": 2, "foto": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2017%2F11%2F22%2F308555-programming.jpg&f=1&nofb=1" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
