import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Post } from './post';

@Injectable()
export class ChannelService {

  // Channel Feed Source
  private notifySource = new BehaviorSubject<string>("News Feed");
  channelID = this.notifySource.asObservable();
  NewsFeed = [
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

  Trends = [
    {
      id: 'postID0',
      user: {
        id: 'userID0',
        name: 'usern33333ame0',
        imageURL: 'imageURL0',
      },
      message: 'message0',
      imageURL: 'imageURL0',
    },
    {
      id: '1',
      user: {
        id: 'userID1',
        name: 'user3333name1',
        imageURL: 'imageURL1',
      },
      message: 'message1',
      imageURL: 'imageURL1',
    }
  ];

  constructor() { }

  changeChannel(channelID: string) {
    this.notifySource.next(channelID);
  }

  getPosts(channelID: string): Post[] {
    if(channelID === 'News Feed') {
      return this.NewsFeed;
    } else if (channelID == 'Trends') {
      return this.Trends;
    }
  }

  getChannels(userID: string) {
    return {
      public: [ { name: 'News Feed' }, { name: 'Trends' }, { name: 'Discounts' }],
      private: [ { name: 'My-Bot' }, {name: 'Francis' } ],
    };
  }

}
