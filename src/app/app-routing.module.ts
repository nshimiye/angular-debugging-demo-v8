import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export function getModule(m) { return m.UsersModule; }
export function loadChildrenFunction () { return import('./users/users.module').then(getModule); } 
// export function loadChildrenFunction () => import('./users/users.module').then(m => m.UsersModule)

const routes: Routes = [
  {
    path: 'users',
    loadChildren: loadChildrenFunction
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
