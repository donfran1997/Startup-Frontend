import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-channel-feed',
  templateUrl: './channel-feed.component.html',
  styleUrls: ['./channel-feed.component.css'],
})
export class ChannelFeedComponent implements OnDestroy {

  channelID: string;

  constructor(private channelService: ChannelService) {

  }

  ngOnInit() {
    this.channelService.channelID.subscribe(channelID => this.channelID = channelID);
  }

  ngOnDestroy() {
  }

}
