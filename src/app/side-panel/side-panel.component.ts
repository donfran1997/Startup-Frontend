import { Component, OnInit } from '@angular/core';

import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
})
export class SidePanelComponent implements OnInit {

  constructor(private channelService: ChannelService) {

  }

  ngOnInit() {
  }

  onChannelChange(channelID: string) {
    this.channelService.changeChannel(channelID);
  }

}
