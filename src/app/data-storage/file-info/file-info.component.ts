import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-info',
  styleUrls: ['./file-info.component.scss'],
  templateUrl: './file-info.component.html',
})
export class FileInfoComponent implements OnInit {

  public size = '815 GB';

  constructor() { }

  public ngOnInit(): void {
  }

}
