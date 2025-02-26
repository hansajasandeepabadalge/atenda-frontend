import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html'
})
export class StatsCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() iconName: string = '';
  @Input() iconColor: string = 'text-blue-500';
  @Input() trend?: string;
  @Input() trendUp?: boolean;
}
