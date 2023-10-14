import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { RoomI, RoomPaginateI } from 'src/app/models/room.interface';
import { environment } from 'src/environments/environment.prod';
import { SocketRoom } from '../../sockets/socket-room';

@Injectable({
  providedIn: 'root',
})
export class  RoomService {
  constructor(
    private socket: SocketRoom,
    private snackbar: MatSnackBar,
    private http: HttpClient
  ) {}

  sendMessage(message: string, room: number): void {
    this.socket.emit('message', { message, room });
  }

  getMessage(): Observable<any> {
    return this.socket.fromEvent('message');
  }

  joinRoom(room: number): void {
    this.socket.emit('joinRoom', room);
  }

  getMyRooms(): Observable<RoomPaginateI> {
    return this.socket.fromEvent<RoomPaginateI>('rooms');
  }

  emitPaginateRooms(limit: number, page: number) {
    this.socket.emit('paginateRooms', { limit, page });
  }

  createRoom(room: RoomI): void {
    this.socket.emit('createRoom', room);
    this.snackbar.open(`Sala ${room.name} creada con éxito`, 'Cerrar', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  isMemberOfRoom(roomId: number): Observable<boolean> {
    return this.http.get<boolean>(
      `${environment.url}/users/is-member-of-room?roomId=${roomId}`,
      {
        headers: new HttpHeaders({
          Authorization: `${localStorage.getItem('session_token')}`,
        }),
      }
    );
  }
}
