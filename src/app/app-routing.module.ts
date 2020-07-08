import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from "./test/test.component";
import { HomeComponent } from './home/home.component';
import { RouteTestComponent } from './route-test/route-test.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      desc: '首页'
    }
  },
  {
    path: 'test',
    component: TestComponent,
    data:{
      desc: '特性'
    }
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule),
    data:{
      desc: '表单'
    }
  },
  {
    path: 'routeTest',
    component: RouteTestComponent,
    data:{
      desc:'练习'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
