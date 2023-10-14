import { EventEmitter, Injectable, Output } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class SocketConnection extends Socket {

  @Output() outEvent: EventEmitter<any> = new EventEmitter();
  constructor() {
    super({
      url: 'http://localhost:5000/connection',
    });
    this.listen();
  }

  listen = () => {
    this.ioSocket.on('message', (res: any) => this.outEvent.emit(res));   
  }

  emitEvent = (payload = {}) => {
    this.ioSocket.emit('message', payload);
  }
}
