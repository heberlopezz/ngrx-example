import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';

const components = [LayoutComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule],
  exports: [...components],
})
export class CoreModule {}
