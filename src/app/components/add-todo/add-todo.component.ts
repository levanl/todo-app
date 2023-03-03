import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit{

  constructor (private dialog: MatDialog,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    
  }


   // Opens Dialog, when add button is pressed
   
   open_popup() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(TodoFormComponent, dialogConfig)
  }
  
  // Gets Input value and passes into todo-form component
  
  onKey(event){
    const inputValue = event.target.value
    this.todoService.inputData = inputValue
  }
}
