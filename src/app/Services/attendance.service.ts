import { Injectable } from '@angular/core';

interface AttendanceRecord {
    studentId: number;
    courseId: number;
    date: string;
    status: boolean; // true for present, false for absent
}

@Injectable({
    providedIn: 'root'
})
export class AttendanceService {
    private attendanceRecords: AttendanceRecord[] = [];

    markAttendance(record: AttendanceRecord) {
        this.attendanceRecords.push(record);
    }

    getAttendanceRecords(): AttendanceRecord[] {
        return this.attendanceRecords;
    }
}