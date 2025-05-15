export interface Attendance {
  id: number;
  employee: {
    id: number;
    fullName: string;
    emailId: string;
    role: string;
  };
  date: string;
  clockInTime: string;
  clockOutTime: string;
  late: boolean;
  earlyLeave: boolean;
}

