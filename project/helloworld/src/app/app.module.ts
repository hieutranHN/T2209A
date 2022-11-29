import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { FormsModule } from '@angular/forms';
import { SinhvienComponent } from './sinhvien/sinhvien.component';

import { Router, RouterModule, Routes } from '@angular/router';
import { NhanvienComponent } from './nhanvien/nhanvien.component';

const routes : Routes = [
  {path: "nhanvien", component: NhanvienComponent},
  {path: "sinhvien", component: SinhvienComponent}
];

@NgModule({
  declarations: [
    SinhvienComponent,
    NhanvienComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [],
})
export class AppModule { }

