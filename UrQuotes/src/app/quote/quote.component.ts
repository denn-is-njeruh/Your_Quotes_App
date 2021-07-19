import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote (1, 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.', 'Martin Luther King', 'Dennis Njeru'),
    new Quote (2, 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', 'Albert Einstein', 'Eric Nzioka'),
    new Quote (3, 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You are on your own. And you know what you know. And YOU are the one who will decide where to go.', 'Dr. Seuss', 'Ian Nzioka'),
    new Quote (4, 'There is no greater agony than bearing an untold story inside you.', 'Maya Angelou', 'Ann Boohle'),
    new Quote (5, 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.', 'Helen Keller', 'Vivian Saumu'),
  ];

  toggleDetails(index:any){
    this.quotes[index].showAuthorAndSubmitter = !this.quotes[index].showAuthorAndSubmitter;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
