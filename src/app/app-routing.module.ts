import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from "./test/test.component";
import { HomeComponent } from './home/home.component';
import { RouteTestComponent } from './route-test/route-test.component'


const routes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) },
  { path: 'routeTest', component: RouteTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
