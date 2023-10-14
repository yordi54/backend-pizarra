import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoomPaginateI } from 'src/app/models/room.interface';
import { UserI } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/public/services/auth-service/auth.service';
import { RoomService } from '../../services/room-service/room.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  rooms$: Observable<RoomPaginateI> = this.roomService.getMyRooms();
  selectedRoom = null;
  user: UserI = this.authService.getLoggedInUser();

  constructor(
    private roomService: RoomService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.roomService.emitPaginateRooms(10, 0);
  }

  ngAfterViewInit(): void {
    this.roomService.emitPaginateRooms(10, 0);
  }

  onSelectRoom(event: MatSelectionListChange) {
    this.selectedRoom = event.source.selectedOptions.selected[0].value;
    this.router.navigate(['../room', this.selectedRoom.id], {
      relativeTo: this.activatedRoute,
      state: this.selectedRoom,
    });
  }

  onPaginateRooms(pageEvent: PageEvent) {
    this.roomService.emitPaginateRooms(pageEvent.pageSize, pageEvent.pageIndex);
  }
}
