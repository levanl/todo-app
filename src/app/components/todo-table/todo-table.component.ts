import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';



@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.scss']
})
export class TodoTableComponent implements OnInit{

  allTodos: Todo[] = [];

  constructor(private http: HttpClient,
  private todoService: TodoService  
  ) {

  }

  ngOnInit() {
    this.fetchTodo();
  }

  onTodoFetch() {
    this.fetchTodo();
  }


  private fetchTodo() {
    this.http.get<{[key: string]: Todo}>('https://todo-ecd9e-default-rtdb.firebaseio.com/todos.json')
    .pipe(map((res) => {
      
      const todoArr = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          todoArr.push({...res[key], id: key})
        }
      }
      return todoArr;
    }))  
    .subscribe( (todoArr) => {
      console.log(todoArr);
      this.allTodos = todoArr;
    } )
  }

  onDeleteTodo(id:string) {
    this.http.delete('https://todo-ecd9e-default-rtdb.firebaseio.com/todos/'+id+'.json')
    .subscribe();

  }


  onEditClicked(id:string) {

    let currentTodo = this.allTodos.find((p) => {
     return p.id === id
    });
    console.log(currentTodo)

  }
}
