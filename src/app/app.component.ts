import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  home_menu = [
    {
      name: 'Home Page',
      icon: 'fa-home',
      url: '/dashboard',
    }
  ];


  forms_menu = [
    {
      name: 'Restaurants',
      icon: 'fa-calendar-alt',
      url: 'initiatives/list',
    },
    {
      name: 'Predicts',
      icon: 'fa-video',
      url: 'course/list',
    }
    ,
    {
      name: 'Data',
      icon: 'fa-users',
      url: 'users/list',
    },

  ];

  private formsMenuSubject = new BehaviorSubject<Array<any>>([]);

  constructor(private router: Router) {
    this.formsMenuSubject.next(this.forms_menu);
  }

  ngOnInit(): void {


  }

  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

}
