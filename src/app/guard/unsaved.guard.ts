import {CanDeactivate} from "@angular/router";
import {ProductComponent} from "../product/product.component";

//自定义一个【离开路由】守卫：处理离开某路由的情况。泛型必填，类型为要保卫的组件
export class UnsavedGuard implements CanDeactivate<ProductComponent>{

  canDeactivate(component: ProductComponent){

    return window.confirm("还没有保存，确定要离开吗？");
  }

}
