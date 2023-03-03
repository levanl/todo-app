import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor(private http: HttpClient) { }

  public inputData: string;

  public isInEdit: boolean = false;

  public refreshTodo = new BehaviorSubject<boolean>(true);

  public formOfTodo: any;

  private refreshNeeded$ = new Subject<void>();

  get refreshNeeded() {
    return this.refreshNeeded$;
  }

  // Recives Todo's as Observables from Firebase (Back)
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://todo-ecd9e-default-rtdb.firebaseio.com/todos.json')
  }

  // Deletes Todo's by their id's
  onDeleteTodo(id:string): Observable<{}> {
    return this.http.delete('https://todo-ecd9e-default-rtdb.firebaseio.com/todos/'+id+'.json')
  }


  // Posts Todo with information that is provided in form's component
  postTodo(): Observable<Todo> {
    const todoVal =  this.formOfTodo.value
    const header = new HttpHeaders({'header': 'todo'});
    return this.http
    .post<Todo>('https://todo-ecd9e-default-rtdb.firebaseio.com/todos.json',todoVal, {headers: header})
    .pipe(
      tap(() => {
        this.refreshNeeded$.next();
      })
    );

  }



}
