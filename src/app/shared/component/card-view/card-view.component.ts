import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit, AfterViewInit {
  @Input() candidateDetail: any;

  interviewDayCount: any;

  interviewRoundData: any = [
    { roundName: 'profile screening', roundOrder: 1 },
    { roundName: 'Initial Telephonic Interview', roundOrder: 2 },
    { roundName: 'Technical Telephonic Interview', roundOrder: 3 },
    { roundName: 'Technical System Test', roundOrder: 4 },
    { roundName: 'Technical F2F interview', roundOrder: 5 },
    { roundName: 'Final F2F', roundOrder: 6 },
  ];

  currentRoundName: any;

  modalName: string = '';

  constructor() {}

  ngOnInit(): void {
    if (this.candidateDetail.interviewAt) {
      let today: Date = new Date();
      let interviewDate: Date = new Date(this.candidateDetail.interviewAt);
      this.interviewDayCount = interviewDate.getDate() - today.getDate();
    } else {
      this.interviewDayCount = null;
    }

    this.currentRoundName = this.interviewRoundData.filter(
      (round: any) => round.roundOrder === this.candidateDetail.currentRound
    )[0];

    this.modalName = 'addInterviewModal-' + this.candidateDetail.applicantId;

    console.log(this.candidateDetail, this.modalName);
  }

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

  displayCardDetail() {
    console.log('candidateDetail', this.candidateDetail);
  }

  list: any[] = ['H', 'T'];
}
