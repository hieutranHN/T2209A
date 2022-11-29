import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css']
})
export class SinhvienComponent implements OnInit {

   id :number  = 1;
   name : string = 'TRẦN VĂN HIẾU';
   address : string  = 'HÀ NỘI';
   tel : string = '0375811xxx';
   email : string = 'hieutvth2208043@fpt.edu.vn';
   salary : number = 999999;

   //listSinhVien = newArray();
   listSinhVien = [
    {
      "id": 1, 
      "name" : "TRẦN VĂN HIẾU", 
      "address" : "HÀ NỘI " ,
      "tel" : "03758XXXXX",
       "email":"hieutvth2208043@fpt.edu.vn",
       "salary": 999999,
    },
   
  ];

  constructor() { }

  ngOnInit(): void {
    
  }
  public themmoisinhvien() {
    for(let index = 0; index < this.listSinhVien.length; index++){
      let sv = this.listSinhVien[index];
    	if(sv.id == this.id){
        alert('ID đã tồn tại , vui lòng nhập ID khác.');
    return;
    }}
      this.listSinhVien.push({
      "id": this.id,
       "name" : this.name,
      "address": this.address,
       "tel" : this.tel,
       "email" : this.email,
       "salary" : this.salary,
       });
    
  }
 
  public xoasinhvien(id : number){
    for(let index = 0; index < this.listSinhVien.length; index++){
      let sv = this.listSinhVien[index];
      if(sv.id == id){
        this.listSinhVien.splice(index, 1);
      }
    }
  }

  public suasinhvien(id : number){
    for(let index = 0; index < this.listSinhVien.length; index++){
      let sv = this.listSinhVien[index];
      if(sv.id == id){
        this.id = sv.id;
        this.name = sv.name;
        this.address = sv.address;
        this.tel = sv.tel;
        this.email = sv.email;
        this.salary = sv.salary;
        break;
      }
    }
  }
  public suasinhvien_capnhat(){
    let id = this.id;
    for(let index = 0; index < this.listSinhVien.length; index++){
      let sv = this.listSinhVien[index];
      if(sv.id == id){
        sv.id = this.id;
       sv.name = this.name;
        sv.address = this.address ;
        sv.tel = this.tel;
        sv.email = this.email;
         sv.salary = this.salary ;
         break;
      }
    }
  }



}



