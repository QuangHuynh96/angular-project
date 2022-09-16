import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  selectedImage :any = null;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  submit() {
    if(this.selectedImage !== null) {
    }
  }

}
