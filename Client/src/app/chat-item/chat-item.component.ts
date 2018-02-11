import { Component, OnInit } from '@angular/core';
import { ChatItem } from '../model/chat-item';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {

  private chatText: string;
  private id: number;
  private chatItems: ChatItem[];
  private chatToAdd: ChatItem = {
    message: ''
  }

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.route.params.subscribe(param => {
      this.id = +param['id'];
      this.http.get(`api/projects/${this.id}/chat`).subscribe(
        (res: any) => {
          this.chatItems = res;
        }
      )
    })
  }

  addChatItem() {
    this.chatToAdd.message = this.chatText;
    console.log(this.chatToAdd);
    this.http.post(`api/projects/${this.id}/chat`, this.chatToAdd).subscribe(
      (res: Response) => {
        this.resetChatText();
        this.loadData();
      })
  }

  resetChatText() {
    this.chatText = '';
  }

}
