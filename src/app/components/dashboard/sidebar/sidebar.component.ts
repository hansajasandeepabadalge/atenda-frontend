import { Component } from '@angular/core';

interface NavItem {
  icon: string;
  label: string;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  navItems: NavItem[] = [
    {
      icon: 'layout-dashboard',
      label: 'Dashboard',
      active: true
    },
    {
      icon: 'users',
      label: 'Student Management'
    },
    {
      icon: 'clipboard-check',
      label: 'Attendance'
    },
    {
      icon: 'graduation-cap',
      label: 'Exams'
    },
    {
      icon: 'credit-card',
      label: 'Fees'
    },
    {
      icon: 'settings',
      label: 'Settings'
    }
  ];
}
