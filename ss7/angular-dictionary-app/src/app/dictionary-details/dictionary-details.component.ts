import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {IwordService} from "../services/iword-service.service";
import {Iword} from "../models/iword";

@Component({
  selector: 'app-dictionary-details',
  templateUrl: './dictionary-details.component.html',
  styleUrls: ['./dictionary-details.component.css']
})
@Injectable()
export class DictionaryDetailsComponent implements OnInit {

  iword: Iword = new Iword("", "","");

  word:any;

  constructor(private activatedRoute: ActivatedRoute, private iwordService: IwordService) { }

  ngOnInit(): void {
    this.iword = this.iwordService.translate(this.activatedRoute.snapshot.params["word"])
  }

}
