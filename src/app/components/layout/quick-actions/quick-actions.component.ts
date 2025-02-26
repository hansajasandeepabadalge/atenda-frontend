import { Component } from '@angular/core';

interface QuickAction {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-quick-actions',
  templateUrl: './quick-actions.component.html'
})
export class QuickActionsComponent {
  actions: QuickAction[] = [
    {
      icon: 'user-plus',
      label: 'Add Student'
    },
    {
      icon: 'clipboard-list',
      label: 'Mark Attendance'
    },
    {
      icon: 'file-text',
      label: 'Generate Report'
    }
  ];
}
