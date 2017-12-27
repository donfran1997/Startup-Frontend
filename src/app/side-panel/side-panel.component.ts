import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
})
export class SidePanelComponent implements OnInit {

  channelID: string;

  constructor(private channelService: ChannelService) {

  }

  ngOnInit() {
    this.channelService.channelID.subscribe(channelID => { this.channelID = channelID});
  }

  onChannelChange(channelID: string) {
    this.channelID = channelID;
    this.channelService.changeChannel(this.channelID);
  }

}
