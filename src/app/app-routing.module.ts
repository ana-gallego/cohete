import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlComponent } from './control/control.component';

const routes: Routes = [
  {
    path: 'control',
    component: ControlComponent
  },
  {
  path: 'planetas/:nombre',
  component: ControlComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
