import {Component, Input, OnInit} from '@angular/core';
import {Service} from "../../model/service";

@Component({
  selector: 'app-service-modal',
  templateUrl: './service-modal.component.html',
  styleUrls: ['./service-modal.component.css']
})
export class ServiceModalComponent implements OnInit {
  display_modal:boolean = false;
  service_delete:Service = new Service(4,"",0,0,"", "");
  @Input("child_services") child_services: Service[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  changeDisplayDelete() {
    this.display_modal = !this.display_modal;
  }

  deleteService(check:boolean) {
    if(check) {
      for(let i = 0; i < this.child_services.length; i++) {
        if(this.child_services[i].id == this.service_delete.id) {
          this.child_services[i] = this.child_services[this.child_services.length-1];
          this.child_services.pop();
          this.service_delete.id = 0;
          console.warn("deleted: " + this.service_delete.ten);
          break;
        }
      }
    }
    this.changeDisplayDelete();
  }
}
