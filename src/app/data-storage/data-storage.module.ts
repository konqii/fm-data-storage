import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataStorageRoutingModule } from './data-storage-routing.module';
import { DataStorageComponent } from './data-storage/data-storage.component';
import { FileInfoComponent } from './file-info/file-info.component';
import { ProgressBarComponent } from './file-info/progress-bar/progress-bar.component';
import { ProgressInfoComponent } from './file-info/progress-info/progress-info.component';
import { FileViewComponent } from './file-view/file-view.component';
import { IconComponent } from './file-view/icon/icon.component';



@NgModule({
  declarations: [FileViewComponent, FileInfoComponent, ProgressBarComponent, ProgressInfoComponent, IconComponent, DataStorageComponent],
  imports: [
    CommonModule,
    DataStorageRoutingModule,
  ],
})
export class DataStorageModule { }
