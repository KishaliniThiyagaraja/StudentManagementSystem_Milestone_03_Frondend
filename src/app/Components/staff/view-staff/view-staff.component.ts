import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../Services/api.service';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrl: './view-staff.component.css'
})
export class ViewStaffComponent implements OnInit {
  staffMembers: any[] = []; // Holds the list of staff members

  ngOnInit(): void {
    // Retrieve staff data (role `2`) from localStorage
    const storedData = localStorage.getItem('2');
    this.staffMembers = storedData ? JSON.parse(storedData) : [];
  }

  deleteStaff(userId: string) {
    // Add delete functionality here if needed.
    alert('Delete functionality not yet implemented');
  }
}