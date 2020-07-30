import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  styleUrls: ['./icon.component.scss'],
  templateUrl: './icon.component.html',
})
export class IconComponent implements OnInit {

  @Input() public image: string;

  constructor() { }

  public ngOnInit(): void { }

}
