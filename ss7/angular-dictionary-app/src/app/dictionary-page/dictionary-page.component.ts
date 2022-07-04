import {Component, Injectable, OnInit} from '@angular/core';
import {IwordService} from "../services/iword-service.service";
import {Iword} from "../models/iword";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
@Injectable()
export class DictionaryPageComponent implements OnInit {
  iwords: Iword[]= [];
  iword: Iword= new Iword("","","");
  word:string = "";

  constructor(private iwordService: IwordService) { }

  ngOnInit(): void {
    this.iwords = this.iwordService.getIwords();
  }

  search() {
    this.iword = this.iwordService.translate(this.word);
  }
}
