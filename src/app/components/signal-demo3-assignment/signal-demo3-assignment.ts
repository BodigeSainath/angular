import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-signal-demo3-assignment',
  imports: [FormsModule],
  templateUrl: './signal-demo3-assignment.html',
  styleUrl: './signal-demo3-assignment.css',
})
export class SignalDemo3Assignment {
todos = signal<Todo[]>([
    { id: 1, title: 'Complete Angular assignment', completed: false },
    { id: 2, title: 'Review pull requests', completed: true },
    { id: 3, title: 'Prepare project report', completed: false },
    { id: 4, title: 'Attend team meeting', completed: true },
    { id: 5, title: 'Update documentation', completed: false },
  ]);

  completedTodos = computed(() =>
    this.todos().filter(todo => todo.completed)
  );

  remainingTodos = computed(() =>
    this.todos().filter(todo => !todo.completed)
  );

  newTodoTitle: string = '';
  newTodoStatus: boolean = false;
  flag: boolean = false;
  private nextId = 6;

  toggle(id: number) {
    this.todos.update(list =>
      list.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  addNewTodo() {
    if (!this.newTodoTitle.trim()) return;
    const newTodo: Todo = {
      id: this.nextId++,
      title: this.newTodoTitle,
      completed: this.newTodoStatus

    };

    this.todos.update(list => [...list, newTodo]);
    this.newTodoTitle = '';
    this.newTodoStatus = false;
    this.flag = false;

  }

  ToggleFlag() {
    this.flag = !this.flag;
  }

  removeTodo(id: number) {
    this.todos.update(list =>
      list.filter(todo => todo.id !== id)
    );
  }

}