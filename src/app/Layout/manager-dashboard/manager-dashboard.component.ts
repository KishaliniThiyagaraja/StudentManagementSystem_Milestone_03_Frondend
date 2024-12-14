import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js/auto';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements AfterViewInit {
  @ViewChild('barCanvas') barCanvas!: ElementRef;

  private barChart: Chart | undefined;

  ngAfterViewInit(): void {
    const labels = ['Students', 'Lecturers',   'Courses', 'Staff'];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Toal Coun ',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgb(201, 203, 207)',  // Fully opaque red
          'rgb(201, 203, 207)',  // Fully opaque orange
          'rgb(201, 203, 207)', // Fully opaque purple
          'rgb(201, 203, 207)'  // Fully opaque gray
        ],
        borderColor: [
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)'
        ],
        borderWidth: 1
      }]
    };

    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    this.barChart = new Chart(this.barCanvas.nativeElement, config);
  }
}
