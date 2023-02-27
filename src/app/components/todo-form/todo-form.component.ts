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

  myForm = this.fb.group({
    title: ['', Validators.required],
    description: '',
  })

  constructor (private fb: FormBuilder,
    public dialogRef: MatDialogRef<TodoFormComponent>,
    private http: HttpClient,
    private todoService: TodoService
    ) {}

  ngOnInit() {
    // this.myForm = this.fb.group ({
    //   title: 'testt',
    //   description: 'todotest'
    // })
  }

  onSubmit() {
    this.dialogRef.close();
    console.log('submitted form', this.myForm.value)
    const todoVal =  this.myForm.value

    const header = new HttpHeaders({'header': 'todo'});
    // firebase.database().ref('/').push({title: this.myForm.value.title, description: this.myForm.value.description})
    this.http.post('https://todo-ecd9e-default-rtdb.firebaseio.com/todos.json',todoVal, {headers: header}).
    subscribe((res) => {
      console.log(res);
    });
  }

}
