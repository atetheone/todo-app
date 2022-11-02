import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todo.entity';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {
  apiURI = 'http://localhost:3000';
  @Input() todo!: Todo;
  @Input() newTodo!: string;
  @Output() remove = new EventEmitter<Todo>();

  editable?: boolean = false;
  constructor(
    private readonly http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  saveItem(desc: string) {
    if (!desc) return;
    this.editable = false;
    this.todo.description = desc;
    this.http
      .post<Todo>(this.apiURI, this.todo)
      .subscribe(
        data => {
          console.log('Data saved successfully: \n' + data);
        },
        err => {}
      )
  }

}
