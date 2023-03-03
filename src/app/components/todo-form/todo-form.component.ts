import { HttpClient, HttpHeaderResponse, HttpHeaders  } from '@angular/common/http';
import { Component, ViewEncapsulation, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TodoService } from 'src/app/services/todo.service';


 
declare var firebase: any;
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {


  // Creates Form
  myForm = this.fb.group({
    title: [this.todoService.inputData, Validators.required],
    description: '',
  })

  constructor (private fb: FormBuilder,
    public dialogRef: MatDialogRef<TodoFormComponent>, 
    private http: HttpClient,
    private todoService: TodoService
  ) {}


  ngOnInit() {
    this.todoService.formOfTodo = this.myForm
  }


  /*
    1. submits new Todo 
    2. closes dialog
    3. changes input Data 
    4. updates Behaviour Subject
  */

  onSubmit() {
    this.dialogRef.close();
    this.todoService.postTodo().
    subscribe((res) => {
      console.log(res);
    });
    this.todoService.inputData = ''
    this.todoService.isInEdit = false
    this.todoService.refreshTodo.next(false);
  }

  

}
