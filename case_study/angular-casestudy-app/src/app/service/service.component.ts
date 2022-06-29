import {Component, OnInit, ViewChild} from '@angular/core';
import {Service} from "../model/service";
import {ServiceModalComponent} from "./service-modal/service-modal.component";
import {ServiceUpdateComponent} from "./service-update/service-update.component";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  services: Service[] = [];
  @ViewChild(ServiceModalComponent) child:ServiceModalComponent= new ServiceModalComponent();
  @ViewChild(ServiceUpdateComponent) child_update:ServiceUpdateComponent= new ServiceUpdateComponent();

  constructor() {
    this.services.push(new Service(1,"OCEAN SUITE",85.8,4,"day", "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg"))
    this.services.push(new Service(2,"SUPERIOR HƯỚNG VƯỜN",105.8,10,"day", "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1-F-370x239.jpg"))
    this.services.push(new Service(3,"SUITE HƯỚNG BIỂN",35.8,4,"day", "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"))
    this.services.push(new Service(4,"DELUX HƯỚNG VƯỜN",55.8,4,"day", "https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Garden-Deluxe-twin-bed-F-370x239.jpg"))
    this.services.push(new Service(5,"STUDIO SUITE HƯỚNG BIỂN",95.8,10,"day", "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg"))
    this.services.push(new Service(6,"DELUX SUITE",55.8,4,"day", "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg"))
  }

  ngOnInit(): void {
  }

  serviceDelete(service:Service) {
    this.child.service_delete = service;
    this.child.display_modal = !this.child.display_modal;
  }

  serviceUpdate(service:Service) {
    this.child_update.showFormUpdate(service);
  }

  createService() {
    let service:Service = new Service(0,"",0,0,"", "");
    this.child_update.showFormCreate(service);
  }
}
