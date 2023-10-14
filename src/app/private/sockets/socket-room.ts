import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { configRoom } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class SocketRoom extends Socket {
  constructor() {
    super(configRoom);
  }
}