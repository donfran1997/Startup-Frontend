import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-feed',
  templateUrl: './channel-feed.component.html',
  styleUrls: ['./channel-feed.component.css']
})
export class ChannelFeedComponent implements OnInit {

  @Input() channelName: string;

  constructor() { }

  ngOnInit() {
  }

}
