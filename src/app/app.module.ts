import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule  } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    AddTodoComponent,
    TodoTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[TodoFormComponent]
})
export class AppModule { }
