import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeroComponent } from './hero/hero.component';
import { MatButtonModule } from "@angular/material/button";
import { RouteTestComponent } from './route-test/route-test.component';
import { RouterModule } from "@angular/router";
import { HighLightDirective } from './highlight.directive';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { FlyingHeroesPipe } from './pipes/flying-heroes.pipe';
import { DialogComponent } from './route-test/component/dialog/dialog.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { AnimationComponent } from './animation/animation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';

// import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeroComponent,
    RouteTestComponent,
    HighLightDirective,
    ExponentialStrengthPipe,
    FlyingHeroesPipe,
    DialogComponent,
    HomeComponent,
    MapComponent,
    AnimationComponent,
    FlexLayoutComponent
  ],
  imports: [
    BrowserModule, // 提供了运行在浏览器中所需要的关键服务(Service)和指令（Directive)
    FormsModule, // 提供了表单处理和双向数据绑定等服务和指令
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    // MatButtonModule,
    // MatCheckboxModule,
    FlexLayoutModule
  ],
  exports: [
    // MatButtonModule,
    // MatCheckboxModule
  ],
  providers: [],  // 列出会在此模块中“注入”的服务（Service）
  bootstrap: [AppComponent] // 指明哪个组件为引导性组件
})
export class AppModule { }
