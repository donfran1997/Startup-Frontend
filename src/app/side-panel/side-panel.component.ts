import { Component, OnInit } from '@angular/core';

import { Channel } from '../channel';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
})
export class SidePanelComponent implements OnInit {

  publicChannels: Channel[];
  privateChannels: Channel[];

  constructor(private channelService: ChannelService) {
    let channels = channelService.getChannels('userID');
    this.publicChannels = channels.public;
    this.privateChannels = channels.private;
  }

  ngOnInit() {
  }

  onChannelChange(channelID: string) {
    this.channelService.changeChannel(channelID);
  }

}
