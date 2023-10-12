import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://www.einerd.com.br/wp-content/uploads/2019/07/Tony-Stark-Estalar-de-Dedos-Homenagem-890x466.jpg"
  contentTitle:string = "NOTÍCIA EXEMPLO"
  contentDescription:string = "dfashiuda djaosdi jdaoskd jdoaisdj jdjd jflsdkjf oasiduas dusoaid ioi aosiduas udaosidu duaosidu"

  constructor() { }

  ngOnInit(): void {
  }

}
