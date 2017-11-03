/**
 * 当前应用的路由配置，新生成了一个叫AppRoutingModule的模块，
 * 然后在主模块(AppModule)中imports了
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {Code404Component} from "./code404/code404.component";
import {ProductDescComponent} from "./product-desc/product-desc.component";
import {SellerInfoComponent} from "./seller-info/seller-info.component";
import {ChatComponent} from "./chat/chat.component";
import {LoginGuard} from "./guard/loginin.guard";
import {UnsavedGuard} from "./guard/unsaved.guard";
import {ProductResolve} from "./guard/product.resolve";

const routes: Routes = [
  {path: '',redirectTo:'/home',pathMatch:'full'},//当访问空字符串路径时，重定向到/home
  {path: 'home',component:HomeComponent},//不需要用斜杠开头
  {path: 'chat',component:ChatComponent,outlet:'aux'},//辅助路由：outlet定义路由要显示的插座的name属性
  {path: 'product/:id',component:ProductComponent,children:[//配置子路由
    {path:'',component:ProductDescComponent},
    {path:'seller/:id',component:SellerInfoComponent}
    //canActivate：指定【访问路由】请求守卫组件，只要有一个返回false，则会被拒绝
    //canDeactivate：指定【离开路由】请求守卫组件，只要有一个返回false，则会被拒绝
  ],
    //canActivate:[LoginGuard],canDeactivate:[UnsavedGuard]
    resolve: {//resolve:在路由激活之前获取数据,和canActivate，canDeactivate不要同时存在
      product: ProductResolve
    }
  },
  {path:'**',component:Code404Component}//通配符，匹配所有路由，但是由于路由是从上往下找，所以可以用来做404配置，但是必须放在所有路由的最后面
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[LoginGuard,UnsavedGuard,ProductResolve]
})
export class AppRoutingModule { }
