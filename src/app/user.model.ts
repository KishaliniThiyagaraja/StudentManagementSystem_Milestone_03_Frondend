export class Course {
  id!: string;
  courseName!: string;
  description!: string;
  startDate!: Date;
  endDate?: Date;
  isDeleted: boolean = false;
}
