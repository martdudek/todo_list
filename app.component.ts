import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList("Martyny",[
    new TodoItem("Pobiegać", true),
    new TodoItem("Iść do sklepu"),
    new TodoItem("Nakarmić psa")
  ]);
  get username(): string{
    return this.list.user;
  }
  get itemCount(): number{
    return this.items.length;
  }
  get items(): readonly TodoItem[]{
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }
  addItem(newItem: string){
    if (newItem != "") {
      this.list.addItem(newItem);
    }
  }
  showComplete: boolean = false;
}
