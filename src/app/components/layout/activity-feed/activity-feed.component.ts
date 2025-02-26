import { Component } from '@angular/core';

interface Activity {
  id: number;
  action: string;
  name: string;
  time: string;
}

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html'
})
export class ActivityFeedComponent {
  activities: Activity[] = [
    {
      id: 1,
      action: "New student registration",
      name: "Emma Thompson",
      time: "2 hours ago"
    },
    {
      id: 2,
      action: "Attendance marked",
      name: "Class 10-A",
      time: "3 hours ago"
    },
    {
      id: 3,
      action: "Fee payment received",
      name: "Michael Scott",
      time: "5 hours ago"
    }
  ];
}
