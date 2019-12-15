import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import {SubComponentComponent} from '../sub-component/sub-component.component';
import { TestComponent } from '../test/test.component';
import { Test2Component } from '../test2/test2.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page, SubComponentComponent, TestComponent, Test2Component]
})
export class Tab3PageModule {}
