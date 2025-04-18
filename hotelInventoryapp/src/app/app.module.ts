import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './request.interceptor';
import { InitService } from './init.service';

function initFactory(initService: InitService):() => Promise<any>{
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initFactory,
    //   deps: [InitService],
    //   multi: true,
    // },
    provideHttpClient(withInterceptors([requestInterceptor])),
    provideHttpClient(withFetch()),
    // provideHttpClient() is used to provide the http client to the application
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
