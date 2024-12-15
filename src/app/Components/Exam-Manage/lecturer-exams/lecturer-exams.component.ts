import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../../Services/exam.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../../Services/student.service';
import { ToastrService } from 'ngx-toastr';
import { MarksService } from '../../../Services/marks.service';

@Component({
  selector: 'app-lecturer-exams',
  templateUrl: './lecturer-exams.component.html',
  styleUrl: './lecturer-exams.component.css'
})
export class LecturerExamsComponent implements OnInit {

  currentExamId: string = '';
  currentExam: any;
  students: any[] = [];
  marks : any[] = [];
  currentUserRole = ''
  constructor(private route: ActivatedRoute, private examService: ExamService, private studentService: StudentService ,
     private toastr : ToastrService , private marksService : MarksService) {
    this.currentExamId = this.route.snapshot.paramMap.get('id') || '';
    this.examService.getExam(this.currentExamId).subscribe(data => {
      console.log(data);
      if (data) {
        this.currentExam = data;
        this.studentService.getStudentsForMarking(data.courseId, data.batch, data.group).subscribe(data => {
          this.students = data;
          this.students.forEach(element => {
            console.log(element.marks)
          });
          this.students = this.students.filter(s => 
            !s.marks.some((e: any) => e.examId == this.currentExamId)
          );
          
      
          console.log(data);
        })
      }
    })
  }
  ngOnInit(): void {
    this.marksService.getMarksByExamId(this.currentExamId).subscribe(data => {
      this.marks = data;
      this.marks = this.marks.filter(m => m.isApproved == false);
      console.log(data);
    })
    this.getUserRole()
  }

  getUserRole(){
    let role = localStorage.getItem('role');
    if(role){
      this.currentUserRole = role;
    }
  }

  // Submit marks for an exam
  submitMarks(exam: any , index : number) {
    if(exam.marks == null || exam.marks < 0){
      this.toastr.warning("Invalid marks")
    }
    console.log(exam);
    let obj = {
      examId : this.currentExamId,
      utNumber : exam.utNumber,
      marks : exam.marks
    }
    console.log(obj)
    this.marksService.addMarks(obj).subscribe(data => {
      console.log(data);
      if(data){
        this.students[0].isChecked = true;
      }
    })
  }
  onApprove(mark : any){
    console.log(mark);
    mark.isApproved = true;
    this.marksService.approveMarks(mark).subscribe(data => {
      console.log(data)
    })
  }
}