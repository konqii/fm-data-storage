import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-info',
  styleUrls: ['./progress-info.component.scss'],
  templateUrl: './progress-info.component.html',
})
export class ProgressInfoComponent implements OnInit {

  @Input() public size = '815';
  @Input() public unit = 'GB';

  constructor() { }

  public ngOnInit(): void {
  }

}
