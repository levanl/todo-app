import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {

  constructor (private dialog: MatDialog) {}

  open_popup() {
    const dialogConfig = new MatDialogConfig()
    
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    
    this.dialog.open(TodoFormComponent, dialogConfig)
  }

  aha() {
    console.log('vuiahfia')
  }
}
