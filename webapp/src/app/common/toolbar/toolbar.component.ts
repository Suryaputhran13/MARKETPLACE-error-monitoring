import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  searchValue:string = '';
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Login',
        command: ()=>{ alert("Login")}
      },
      {
        label:'Register',
        command: ()=>{ alert("Register")}
      }
    ]
  }

}
