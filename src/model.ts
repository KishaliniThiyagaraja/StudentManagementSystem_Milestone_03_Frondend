export interface TimeTable {
  id: number;
  CourseId: string;
  Date: string;
  StartTime: string;
  EndTime: string;
  Location:string;

}


export interface Course {
  id: string;
  courseName: string;
  description: string;
  startDate: Date;
  endDate: Date;
 isDeleted: true ;
 isEditing?: true | undefined
}

export interface Student{
  utNumber:string;
  firstName:string;
  lastName:string;
  nicNumber:string;
  email:string;
  batch:string;
}
