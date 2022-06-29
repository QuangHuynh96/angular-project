import {Component, Input, OnInit} from '@angular/core';
import {Service} from "../../model/service";

@Component({
  selector: 'app-service-update',
  templateUrl: './service-update.component.html',
  styleUrls: ['./service-update.component.css']
})
export class ServiceUpdateComponent implements OnInit {
  checkUpdate:boolean = false;
  checkCreate:boolean = false;
  display_update: boolean = false;
  service_update:Service = new Service(0,"",0,0,"", "");
  Name:string = this.service_update.ten;
  @Input("child_services") child_services: Service[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  changeDisplayUpdate() {
    this.display_update = !this.display_update;
  }

  showFormUpdate(service:Service) {
    this.service_update = service;
    this.checkUpdate = true;
    this.changeDisplayUpdate();
  }

  showFormCreate(service:Service) {
    this.service_update = service;
    this.checkCreate = true;
    this.changeDisplayUpdate();
  }

  update() {
    //update
    if(this.checkUpdate){
      for(let i = 0; i < this.child_services.length; i++) {
        if(this.child_services[i].id == this.service_update.id) {
          this.child_services[i] = this.service_update;
          break;
        }
      }
    }
    //create
    if(this.checkCreate) {
      this.child_services.push(this.service_update);
    }
    this.changeDisplayUpdate();//tắt form
    this.checkUpdate = this.checkCreate = false;//reset 2 biến check
  }


}
