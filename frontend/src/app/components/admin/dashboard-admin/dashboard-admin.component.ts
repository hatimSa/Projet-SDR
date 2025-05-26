import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent {
  stats = [
    { title: 'Total Users', value: 1025, icon: 'bi-people', bg: 'bg-primary', description: 'All registered users' },
    { title: 'Admins', value: 15, icon: 'bi-person-badge', bg: 'bg-success', description: 'Users with Admin role' },
    { title: 'Active Users', value: 948, icon: 'bi-person-check', bg: 'bg-info', description: 'Currently active users' },
    { title: 'Roles', value: 5, icon: 'bi-shield-lock', bg: 'bg-warning', description: 'Defined roles in system' },
    { title: 'Permissions', value: 27, icon: 'bi-lock', bg: 'bg-danger', description: 'Available permissions' },
    { title: 'Banned Users', value: 3, icon: 'bi-person-x', bg: 'bg-secondary', description: 'Users blocked from system' }
  ];
}
