import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeatilsComponent } from './product/deatils/deatils.component';
import { ListComponent } from './product/list/list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Routes = [
  {
    path:'',
    component: ToolbarComponent,
    children:[
      {
        path:'',
        component:HomeComponent,
      },
      {
        path:'product/list',
        component:ListComponent
      },
      {
        path:'product/deatils',
        component:DeatilsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
