import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserI } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/public/services/auth-service/auth.service';
import { RoomService } from '../../services/room-service/room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css'],
})
export class CreateRoomComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null),
    users: new FormArray([], [Validators.required]),
  });
  user: UserI = this.authService.getLoggedInUser();

  constructor(
    private roomService: RoomService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
  ) {}

  create(): void {
    if (this.form.valid) {
      this.roomService.createRoom(this.form.getRawValue());
      this.router.navigate(['../dashboard'], {
        relativeTo: this.activatedRoute,
      });
    }
  }

  initUser(user: UserI): FormControl {
    return new FormControl({
      id: user.id,
      username: user.username,
      email: user.email,
    });
  }

  addUser(userFormControl: FormControl): void {
    this.users.push(userFormControl);
  }

  removeUser(userId: number): void {
    this.users.removeAt(
      (this.users.value as Array<UserI>).findIndex(
        (user: UserI) => user.id === userId
      )
    );
  }

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get description(): FormControl {
    return this.form.get('description') as FormControl;
  }

  get users(): FormArray {
    return this.form.get('users') as FormArray;
  }
}
