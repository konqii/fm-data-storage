import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  styleUrls: ['./progress-bar.component.scss'],
  templateUrl: './progress-bar.component.html',
})
export class ProgressBarComponent implements OnInit {

  @Input() public lowerbound = '0';
  @Input() public upperbound = '1000';
  @Input() public size = '815';
  @Input() public unit = 'GB';

  constructor() { }

  public ngOnInit(): void {
  }

  public calculateWidth(size: string, lowerbound: string, upperbound: string): string {
    const value = Number.parseInt(size, 10);
    const lower = Number.parseInt(lowerbound, 10);
    const upper = Number.parseInt(upperbound, 10);

    const max = upper - lower;

    console.log('value', value);
    console.log('lower', lower);
    console.log('upper', upper);
    console.log('max', max);

    const width = 100 / max * value;
    console.log('width', width);
    return String(width);
  }

}
