export class User {
  constructor(
    public username: string,
    public password: string,
    public role: string // Manager, Staff, Lecturer, Student
  ) {}
}
