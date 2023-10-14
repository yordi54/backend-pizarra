import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  DiagramModule,
  SymbolPaletteModule,
} from '@syncfusion/ej2-angular-diagrams';
import { RoomComponent } from './components/room/room.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SelectUsersComponent } from './components/select-users/select-users.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    DashboardComponent,
    RoomComponent,
    CreateRoomComponent,
    SelectUsersComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    MatListModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatToolbarModule,
    DiagramModule,
    SymbolPaletteModule,
    ToolbarModule,
    SplitButtonModule 
  ],
})
export class PrivateModule {}
