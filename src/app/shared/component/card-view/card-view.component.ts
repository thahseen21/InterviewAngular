import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    let childEl = document.getElementById('test');
    let card = document.getElementsByClassName(
      'interviewer'
    ) as HTMLCollectionOf<HTMLElement>;

    let cw = childEl?.clientWidth;
    let sw = childEl?.scrollWidth;

    console.log(cw, sw);

    if (cw && sw) {
      let offset = (sw - cw) / (card.length - 1);

      for (var i = 1; i < card.length; i++) {
        card[i].style.transform = 'translateX(-' + offset * i + 'px)';
      }
    }
  }

  list: any[] = ['H', 'T'];
}
