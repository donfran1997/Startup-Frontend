import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-channel-post',
  templateUrl: './channel-post.component.html',
  styleUrls: ['./channel-post.component.css']
})
export class ChannelPostComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
