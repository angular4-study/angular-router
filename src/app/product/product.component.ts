import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //2.声明一个属性，来接收路由中传递的参数
  private productId:number;

  //1.初始化时，声明一个叫routeInfo的变量，类型是ActivatedRoute，相当于每次实例化时，都拿到当前组件的路由对象
  constructor(private routeInfo: ActivatedRoute) {

  }

  ngOnInit() {
    //3.把拿到的当前组件的对象的属性赋值给productId
    //this.productId = this.routeInfo.snapshot.queryParams["id"];//参数中传，取值方式

    //一。（如果组件不存在自己路由到自己的情况）参数快照方式snapshot，只监控组件，不监控参数
    //this.productId = this.routeInfo.snapshot.params["id"];//路由中（url）传，取值方式
    //二。（如果组件可能会自己路由到自己）参数订阅来获得参数
    this.routeInfo.params.subscribe((myparams:Params) => this.productId = myparams["id"]);
  }

}
