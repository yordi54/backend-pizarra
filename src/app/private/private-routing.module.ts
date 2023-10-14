import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomGuard } from '../guards/room/room.guard';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RoomComponent } from './components/room/room.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'create-room',
    component: CreateRoomComponent,
  },
  {
    path: 'room/:id',
    component: RoomComponent,
    canActivate: [RoomGuard],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
