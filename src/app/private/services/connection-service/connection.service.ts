import { EventEmitter, Injectable, Output } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService extends Socket {
  @Output() outEvent: EventEmitter<any> = new EventEmitter();
  constructor() {
    super({
      url: 'https://backend-pirzarra.onrender.com/connection',
    });
    this.listen();
  }

  joinRoom(room: string): void {
    this.ioSocket.emit('joinRoom', room);
  }

  saveDiagram(diagram: string): void {
    this.ioSocket.emit('saveDiagram', diagram);
  }

  listen = () => {
    this.ioSocket.on('message', (res: any) => this.outEvent.emit(res));
  };

  emitEvent = (payload = {}) => {
    this.ioSocket.emit('message', payload);
  };
}
