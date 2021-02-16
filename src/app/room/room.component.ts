import { Component, OnInit } from "@angular/core";
import { WebexService } from "../webex.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})

export class RoomComponent implements OnInit{
  roomName: string;

  constructor(private webex: WebexService) {}

  ngOnInit(): void {
    this.webex.onInit()
  }

  onCreateRoom() {
    if(this.roomName) {
      this.webex.onCreateRoom(this.roomName)
    }
  }

  listRooms() {
    this.webex.onListRoom().then((rooms) => {
      console.log(rooms)
    })
  }

  onLogout() {
    this.webex.onLogout()
  }
  addmember() {
    if(this.roomName) {
    this.webex.addmember(this.roomName)
    }
    }
    sendmsg() {
    if(this.roomName) {
    this.webex.sendmsg(this.roomName)
    }
    }
}
