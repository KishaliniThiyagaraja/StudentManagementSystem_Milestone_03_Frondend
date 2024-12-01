export interface TimeTable {
  id: number;
  CourseId: string;
  Date: string;
  StartTime: string;
  EndTime: string;
  Location:string;

}


export class Course {
  id!: string;
  courseName!: string;
  description!: string;
  startDate!: Date;
  endDate?: Date;
  isDeleted: boolean = false;
}
