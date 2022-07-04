import { Injectable } from '@angular/core';
import {Iword} from "../models/iword";

@Injectable({
  providedIn: 'root'
})
export class IwordService {
  iwords: Iword[] = [
    new Iword("one","một","một chữ số"),
    new Iword("tow","hai","một chữ số"),
    new Iword("three","ba","một chữ số"),
    new Iword("four","bốn","một chữ số"),
    new Iword("five","năm","một chữ số"),
    new Iword("six","sáu","một chữ số"),
    new Iword("seven","bảy","một chữ số"),
    new Iword("eight","tám","một chữ số"),
    new Iword("nice","chín","một chữ số"),
    new Iword("ten","mười","một chữ số"),
  ];

  constructor() {
  }

  translate(word:any) {
    for (let i = 0; i < this.iwords.length; i++) {
      if (word === this.iwords[i].word) {
        return this.iwords[i];
        break;
      }
    }
    return new Iword("","","");
  }
  getIwords() {
    return this.iwords;
  }
}
