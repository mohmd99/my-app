import { PermissionComponent } from './permission/permission.component';
import { ValidComponent } from './valid/valid.component';
import { UserComponent } from './user/user.component';
import { TabsComponent } from './tabs/tabs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:"",component:TabsComponent},
{path:"user",component:UserComponent},
{path:"valid",component:ValidComponent},
{path:"permission",component:PermissionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
