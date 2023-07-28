import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, // 提供了运行在浏览器中所需要的关键服务(Service)和指令（Directive)
    FormsModule, // 提供了表单处理和双向数据绑定等服务和指令
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [],
  providers: [],  // 列出会在此模块中“注入”的服务（Service）
  bootstrap: [AppComponent] // 指明哪个组件为引导性组件
})
export class AppModule { }
