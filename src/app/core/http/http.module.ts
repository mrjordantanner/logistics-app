import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';


@NgModule({
  providers: [
    provideHttpClient(),
    UserService
  ]
})
export class HttpModule {}
