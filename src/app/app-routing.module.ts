import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunfactsComponent } from './funfacts/funfacts.component';
import { ShellComponent } from './shared/shell/shell.component';
import { AddbioComponent } from './addbio/addbio.component';


const routes: Routes = [
  {
    path: 'funfacts', component: FunfactsComponent
  },
  {
    path: 'shared', component: ShellComponent
  },
  {
    path: 'addbio', component: AddbioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
