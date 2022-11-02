import { Component } from '@angular/core';
import { Todo } from './todo.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'frontend';
  filter: 'active' | 'all' | 'done' = 'all';

  todos = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get items() {
    if (this.filter === 'all') return this.todos;
    return this.todos.filter(item => this.filter === 'done'? item.done : !item.done);
  }

  addItem(description: string) {
    this.todos.unshift({
      description,
      done: false
    });
  }

  remove(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
  
}
