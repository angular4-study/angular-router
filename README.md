## 项目创建命令
- ng new angular-router --routing

## angular路由基础知识

-  路由相关对象介绍
  - Routes：路由配置，保存着那个url对应展示哪个组件，以及在哪个RouteOutlet中展示组件（url<-->component）
  - RouteOutlet：在html中标记路由内容呈现的占位符命令
  - Router：在controller中使用，负责在运行是执行路由的对象，可以通过调用其navigate()和navigateByUrl()方法来导航到一个指定的路由
  - RouterLink：在html中声明路由导航用的指令
  - ActivatedRoute：当前激活的路由对象，保存着当前路由的信息，如路由地址，路由参数
    - 在路由时传递数据：1.参数中传(get)   /product?id=5&name=tom => ActivatedRoute.queryParams[id]
      - 1.路由写成：{path: 'product',component:ProductComponent}
      - 2.页面传值写成：<a [routerLink]="['/product']" [queryParams]="{id:1}">商品详情</a>
      - 3.Controller中取值写成：this.productId = this.routeInfo.snapshot.queryParams["id"];
    - 在路由时传递数据：2.路径中传(post)   {path：'/product/:id'} => /product/5 => ActivatedRoute.queryParams[id]
      - 1.路由写成：{path: 'product/:id',component:ProductComponent}
      - 2.页面传值写成：<a [routerLink]="['/product',2]" >商品详情</a>
      - 3.Controller中取值写成：this.productId = this.routeInfo.snapshot.params["id"];或者this.routeInfo.params.subscribe((myparams:Params) => this.productId = myparams["id"]);
    - 在路由时传递数据：3.路由配置中传   {path:'/product',component:ProductComponent,data:[{isMan:true}]} => ActivatedRoute.data[0][isMan]
  - 重定向路由：{path: '',redirectTo:'/home',pathMatch:'full'}
  - 辅助路由：给当前插座加一个弟弟
    - 1. 在需要辅助的页面中：<router-outlet></router-outlet><router-outlet name="mybrother"></router-outlet>
    - 2. 在路由配置中：{path: 'xxx',component:XxxComponent,outlet: 'mybrother'}{path: 'yyy',component:YyyComponent,outlet: 'mybrother'} 指定了mybrother这个插座可以插入xxx和yyy路由
    - 3. 在需要辅助的页面的父页面：<a [routerLink]="['/home',{outlet:{mybrother:'xxx'}}]">Xxx</a><a [routerLink]="['/product',{outlet:{mybrother:'yyy'}}]">Yyy</a>
    - 4. 如果把1改成<a [routerLink]="[{outlets:{primary:'home' ,aux:'chat'}}]">开始聊天</a>则表示在插入chat组件时，不管当前在哪个路由，都转到默认(primary)路由上
# AngularRouter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
