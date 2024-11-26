import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../Services/api.service';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrl: './view-staff.component.css'
})
export class ViewStaffComponent implements OnInit {
  staffList: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getStaff().subscribe((data) => {
      this.staffList = data;
    });
  }

  deleteStaff(userId: string) {
    // Add delete functionality here if needed.
    alert('Delete functionality not yet implemented');
  }
}