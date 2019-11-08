import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { components } from './components';

@NgModule({
  declarations: [...components],
  imports: [HttpClientModule, CommonModule, RouterModule],
  exports: [HttpClientModule, CommonModule, RouterModule, ...components],
})
export class ExampleSharedModule {}
