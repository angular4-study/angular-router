import {CanActivate} from "@angular/router";

//自定义一个【访问路由】守卫：处理导航到某路由的情况
export class LoginGuard implements CanActivate{

  //实现接口方法，必须返回boolean值。anguler会根据返回的布尔值来决定当前路由请求是否通过
  canActivate(){

    let loggedIn:boolean = Math.random() < 0.5;

    if(!loggedIn){
      console.log("用户未登录");
    }

    return loggedIn;
  }

}
