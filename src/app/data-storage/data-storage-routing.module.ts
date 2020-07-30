import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataStorageComponent } from './data-storage/data-storage.component';

const paths = [
  {
    component: DataStorageComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(paths)],
})
export class DataStorageRoutingModule {}
