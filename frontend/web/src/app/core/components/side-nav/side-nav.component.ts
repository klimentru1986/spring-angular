import { Component, OnInit } from '@angular/core';
import { SideNavItem } from '../../models/side-nav-item.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  menu: SideNavItem[] = [
    {
      name: 'Список пользователей',
      link: '/customer/list'
    },
    {
      name: 'Добавить пользователя',
      link: '/customer/create'
    }
  ];
}
