import { NgModule } from '@angular/core';
import { HttpModule } from './http/http.module';

@NgModule({
  imports: [HttpModule],
  exports: [HttpModule]
})
export class CoreModule {}
