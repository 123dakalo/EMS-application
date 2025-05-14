import { Employee } from './employee';

export interface Attendance {
  id: number;
  date: string;
  clockInTime: string;
  clockOutTime?: string;
  late: boolean;
  earlyLeave?: boolean;
  employee: Employee;
}
