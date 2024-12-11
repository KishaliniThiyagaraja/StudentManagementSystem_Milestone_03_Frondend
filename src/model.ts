export interface TimeTable {
  id: number;
  courseId: string;
  Date: string;
  startTime: string;
  endTime: string;
  location:string;
  batch : string;
  timeSlots : any[]
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


export interface Enrollment{
  
}

export interface AttendanceRequest{
  timeSlotId : string;
  studentUtNumber : string
}
