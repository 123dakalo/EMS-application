export interface Employee {
  id: number;
  fullName: string;
  emailId: string;
  password?: string;
  role: 'employee' | 'admin' | 'superadmin';
}
