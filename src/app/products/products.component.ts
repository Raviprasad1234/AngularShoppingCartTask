import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  P_Count : any =1;

  itemCartVal  = 1;


  @Output() productAddTocart: any = new EventEmitter();

  productArr = [{ pid:1, pname : "CLARITHROMYCIN" , CAS_No : 12333-12-1,Weight : "550g",Price:500,GST : "18%",
    Final_Price: 400, Shipping_fee:800, image:"https://in.carbanio.com/laravel-filemanager/media/CarbanioBannerImages/basf2.png"},
    {pid:2, pname : "CLARITHROMYCIN" , CAS_No : 12333-12-1,Weight : "550g",Price:500,GST : "18%",
    Final_Price: 400, Shipping_fee:800 ,image:"https://in.carbanio.com/laravel-filemanager/media/CarbanioBannerImages/basf2.png"} ,
    { pid:3, pname : "CLARITHROMYCIN" , CAS_No : 12333-12-1,Weight : "550g",Price:500,GST : "18%",
    Final_Price: 400, Shipping_fee:800 , image:"https://in.carbanio.com/laravel-filemanager/media/CarbanioBannerImages/basf2.png"}]



    AddToCart(product){


      const productExistInCart = this.productArr.find(({pid}) => pid === product.pid); // find product by name
    
      console.log(productExistInCart);
       
   
      for (var i = 0; i < this.productArr.length; i++) {
        // merge objects into one with multiple props
        if( productExistInCart.pid == this.productArr[i].pid){
          if(this.productArr[i].P_Count === undefined && productExistInCart.pid === this.productArr[i].pid){
            this.productArr[i] = Object.assign(this.productArr[i], {
              P_Count: 0,
              itemCartVal : 0
              });
              this.productAddTocart.emit(this.productArr[i].P_Count);   
          } else{
            console.log(this.productArr[i].P_Count);
            debugger;
            this.productArr[i] = Object.assign(this.productArr[i], {
              P_Count: this.productArr[i].P_Count  + 1,
              itemCartVal : this.productArr[i].P_Count
              });

              debugger;
              console.log("Check p count" , this.productArr[i].P_Count)
              this.productAddTocart.emit(this.productArr[i].P_Count - 1);
      
            }        
        } else{
        }
    

        // this.productAddTocart.emit(this.productArr);
    }
    
  }


    decreaseFromCart(product){

      const productExistInCart = this.productArr.find(({pid}) => pid === product.pid); // find product by name
    
      console.log(productExistInCart);
       
   
      for (var i = 0; i < this.productArr.length; i++) {
        // merge objects into one with multiple props
        if( productExistInCart.pid == this.productArr[i].pid){
          if(this.productArr[i].P_Count == undefined && productExistInCart.pid == this.productArr[i].pid){
            this.productArr[i] = Object.assign(this.productArr[i], {
              P_Count: 0,
              itemCartVal : 0
              });

          } else{
            this.productArr[i] = Object.assign(this.productArr[i], {
              P_Count: this.productArr[i].P_Count  - 1,
              itemCartVal : this.productArr[i].P_Count
              });

              this.productAddTocart.emit(this.productArr[i].P_Count - 1 );
          }
          debugger;
        
        } else{
        }


  
    
  
      }
    
    }



    RemoveObj(pid){

       this.productArr = this.productArr.filter((item) => item.pid !== pid);

       alert('item removed');

       debugger;
    }



  }
