export class Service {
  id:number;
  ten:string;
  dien_tich:number;
  so_luong_nguoi_toi_da:number;
  kieu_thue:string;
  url:string;


  constructor(id: number, ten: string, dien_tich: number, so_luong_nguoi_toi_da: number, kieu_thue: string, url: string) {
    this.id = id;
    this.ten = ten;
    this.dien_tich = dien_tich;
    this.so_luong_nguoi_toi_da = so_luong_nguoi_toi_da;
    this.kieu_thue = kieu_thue;
    this.url = url;
  }
}
