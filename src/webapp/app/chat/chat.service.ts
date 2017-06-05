import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ChatService {

  private socket: WebSocket;
  private listener: EventEmitter<any> = new EventEmitter();

  public constructor(){
  }

  public connect(){
    this.socket = new WebSocket('ws://localhost:8080/websocket');
    this.socket.onopen = event => {
      this.listener.emit({"type": "open", "data": event});
    };
    this.socket.onclose = event => {
      this.listener.emit({"type": "close", "data": event});
    };
    this.socket.onmessage = event => {
      console.log(this.listener);
      this.listener.emit({"type": "message", "data": event.data});
    };
  }

  public send(data: string) {
    this.socket.send(data);
  }

  public close() {
    this.socket.close();
  }

  public getEventListener() {
    return this.listener;
  }
}
