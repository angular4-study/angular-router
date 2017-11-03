/**
 * 当前应用的路由配置，新生成了一个叫AppRoutingModule的模块，
 * 然后在主模块(AppModule)中imports了
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {Code404Component} from "./code404/code404.component";

const routes: Routes = [
  {path: '',component:HomeComponent},//第一个路由配置,不需要用斜杠开头
  {path: 'product/:id',component:ProductComponent},
  {path:'**',component:Code404Component}//通配符，匹配所有路由，但是由于路由是从上往下找，所以可以用来做404配置，但是必须放在所有路由的最后面
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
