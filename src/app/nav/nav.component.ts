import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  inputs: ['contactData']
})

export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
