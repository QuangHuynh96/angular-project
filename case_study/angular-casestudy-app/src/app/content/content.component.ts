import { Component, OnInit } from '@angular/core';

class service {
  ten:string
  dien_tich:number;
  so_luong_nguoi_toi_da:number;
  kieu_thue:string
  url:string;

  constructor(ten: string, dien_tich: number, so_luong_nguoi_toi_da: number, kieu_thue: string, url: string) {
    this.ten = ten;
    this.dien_tich = dien_tich;
    this.so_luong_nguoi_toi_da = so_luong_nguoi_toi_da;
    this.kieu_thue = kieu_thue;
    this.url = url;
  }
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  services: service[] = [];

  constructor() {
    this.services.push(new service("OCEAN SUITE",85.8,4,"day", "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg"))
    this.services.push(new service("SUPERIOR HƯỚNG VƯỜN",105.8,10,"day", "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1-F-370x239.jpg"))
    this.services.push(new service("SUITE HƯỚNG BIỂN",35.8,4,"day", "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"))
    this.services.push(new service("DELUX HƯỚNG VƯỜN",55.8,4,"day", "https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Garden-Deluxe-twin-bed-F-370x239.jpg"))
    this.services.push(new service("STUDIO SUITE HƯỚNG BIỂN",95.8,10,"day", "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg"))
    this.services.push(new service("DELUX SUITE",55.8,4,"day", "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg"))
  }

  ngOnInit(): void {
  }

}
