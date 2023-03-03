import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders  } from '@angular/common/http';
import { BehaviorSubject, map} from 'rxjs';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';
import { switchMap } from 'rxjs/operators';
import { trigger, transition } from '@angular/animations';




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

    this.todoService.refreshNeeded.subscribe(()=> {
      this.onTodoFetch();
    })

    this.onTodoFetch()
  }

  onTodoFetch() {
    this.fetchTodo();
  }


  private fetchTodo() {
    this.todoService.getTodos()
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
    this.todoService.onDeleteTodo(id).subscribe(() => {
  })

  }


  onEditClicked(id:string) {

    let currentTodo = this.allTodos.find((p) => {
     return p.id === id
    });
    console.log(currentTodo)
    this.todoService.isInEdit = true;
    
  console.log(this.todoService.isInEdit)
  }

  strikeTodo(id:string) {
    
  }
}
