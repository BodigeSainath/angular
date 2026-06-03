import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TodoService } from '../../services/todo-service';
@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  todo$ : Observable<any> | undefined;
  tosoService = inject(TodoService);
 ngOnInit() {
    this.todo$ = this.tosoService.todoObs;
  }
  deleteTodo(id: any) {
    this.tosoService.deleteToDo(id);
  }

}
