import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-channel-feed',
  templateUrl: './channel-feed.component.html',
  styleUrls: ['./channel-feed.component.css'],
})
export class ChannelFeedComponent implements OnDestroy {

  channelID: string;
  posts = [
    {
      id: 'postID0',
      user: {
        id: 'userID0',
        name: 'username0',
        imageURL: 'imageURL0',
      },
      message: 'message0',
      imageURL: 'imageURL0',
    },
    {
      id: '1',
      user: {
        id: 'userID1',
        name: 'username1',
        imageURL: 'imageURL1',
      },
      message: 'message1',
      imageURL: 'imageURL1',
    }
  ];

  constructor(private channelService: ChannelService) {

  }

  ngOnInit() {
    this.channelService.channelID.subscribe(channelID => this.channelID = channelID);
  }

  ngOnDestroy() {
  }

}
