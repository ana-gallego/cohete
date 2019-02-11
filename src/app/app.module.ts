import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';

import { ControlService } from './services/control.service';
import { CabinaComponent } from './components/cabina/cabina.component';
import { MotorComponent } from './components/motor/motor.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    CabinaComponent,
    MotorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  
  ],
  providers: [ControlService,CabinaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
