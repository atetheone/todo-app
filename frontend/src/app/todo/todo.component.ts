import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  msg = '';
  backendUrl = 'http://localhost:3000'
  constructor(
    private readonly http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<any>(this.backendUrl)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          this.msg = data.Message;
        }
      )
  }

}
