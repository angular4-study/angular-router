import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Product} from "../product/product.component";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

//只有被装饰了，private router才能被注入进来

@Injectable
export class ProductResolve implements Resolve<Product> {

  constructor(private router: Router){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product>|Promise<Product>|Product {

    let productId: number = route.params["id"];

    if(productId == 1){
      return new Product(1,"iphone7");
    }else{
      this.router.navigate(["/home"]);
      return undefined;
    }
  }


}
