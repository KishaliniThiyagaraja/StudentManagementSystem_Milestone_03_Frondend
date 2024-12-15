import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from '../../../../Services/course.service';
import { Course } from '../../../../../model';
import { TimeTableService } from '../../../../Services/time-table.service';

@Component({
  selector: 'app-time-table-add',
  templateUrl: './time-table-add.component.html',
  styleUrl: './time-table-add.component.css'
})
export class TimeTableAddComponent {

  timetableForm: any;
  now: Date;
  days: any[] = [];
  courses!: Course[];
  features = {
    currentDate : ''
  }

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router,
    private toastr: ToastrService, private courseService: CourseService, private timeTableService: TimeTableService) {
    this.now = new Date();
    this.timetableForm = this.fb.group({
      year: [this.now.getFullYear(), [Validators.required]],
      week: [this.getWeek(this.now), [Validators.required]],
      batch: ['', [Validators.required]],
      day: ['', [Validators.required]],
      timeSlots: this.fb.array([])
    })
    this.generateDays();
    console.log(this.days);
    this.getCourses();
  }
  getWeek(day: any) {
    const firstDayOfYear: any = new Date(day.getFullYear(), 0, 1);
    const pastDaysOfYear: number = (day - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };
  generateDays() {
    this.formatDates(this.now.toLocaleDateString())
  }
  formatDates(obj: string) {
    for (let i = 1; i < 14; i++) {
      let dateInput: any = obj.split('/').reverse();
      dateInput[2] = (parseInt(dateInput[2]) + i).toString();
      if (dateInput[2].length == 1) {
        dateInput[2] = dateInput[2].padStart(2, '0')
      }
      dateInput = dateInput.join('-')
      this.days.push(dateInput)
    }
  }
  addRow() {
    this.timeSlots.push(this.fb.group({
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      courseId: ['', [Validators.required]],
      classType: ['']
    }))
  }
  removeRow(index: number) {
    this.timeSlots.removeAt(index);
  }

  get timeSlots(): FormArray {
    return this.timetableForm.get('timeSlots') as FormArray;
  }
  onSubmit() {
    console.log(this.timetableForm.value);
    this.timetableForm.value.batch = parseInt(this.timetableForm.value.batch);
    this.timetableForm.value.timeSlots.forEach((slot: any) => {
      slot.classType = parseInt(slot.classType);
    });
    this.timeTableService.addTable(this.timetableForm.value).subscribe(data => {
      console.log(data);
    })
  }
  getCourses() {
    this.courseService.getCourse().subscribe(data => {
      this.courses = data;
    })
  }
  getTableByDate(){
    console.log(this.features.currentDate);
  }
}
