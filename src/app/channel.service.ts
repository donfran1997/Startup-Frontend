import { Injectable } from '@angular/core';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';

@Injectable()
export class ChannelService {

  // Channel Feed Source
  private notifySource = new BehaviorSubject<string>("Default Channel");
  channelID = this.notifySource.asObservable();

  constructor() { }

  changeChannel(channelID: string) {
    this.notifySource.next(channelID);
  }

}
