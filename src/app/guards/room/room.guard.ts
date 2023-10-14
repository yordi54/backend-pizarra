import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { RoomService } from 'src/app/private/services/room-service/room.service';

@Injectable({
  providedIn: 'root',
})
export class RoomGuard implements CanActivate {
  constructor(private router: Router, private roomService: RoomService) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Promise<boolean | UrlTree> {
    const id = route.params['id'];
    const result = await lastValueFrom(this.roomService.isMemberOfRoom(id));
    const data = this.router.getCurrentNavigation().extras.state;
    if (result && data) {
      return result;
    } else {
      this.router.navigate(['./private/dashboard']);
      return result;
    }
  }
}
