import { Component } from '@angular/core';

@Component({
  selector: 'app-ban-hang',
  templateUrl: './ban-hang.component.html',
  styleUrls: ['./ban-hang.component.css']
})
export class BanHangComponent {
    id : number = 0;
    ten : string = '';
    soluong : number = 1;
    gia : string = '1.000.000 VND';
    danhmuc : string = '';

    banhang = Array();

    constructor(){}

    ngOnInit(){
    
    }
  
  public themsanpham(){
    for(let index = 0; index < this.banhang.length; index++){
      let sp = this.banhang[index];
    	if(sp.id == this.id){
        alert('Mã sản phẩm đã có người sử dụng ,vui lòng nhập mã khác !');
    return;
    }}
    this.banhang.push({
    "id":this.id,
    "ten":this.ten, 
    "soluong":this.soluong,
    "gia":this.gia,
    "danhmuc":this.danhmuc
    })
  }
  public xoa(){
    for(let index = 0 ;index < this.banhang.length; index++){
      let sp = this.banhang[index];
      if(sp.id == this.id){
        this.banhang.splice(index,1);
      }
    }
  }
  public sua(){
    for(let i=0 ; i<this.banhang.length ; i++){
      
    }
  }
 
  

}






