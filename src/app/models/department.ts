import { EmployeeJava } from './employee-java';

export class Department {
 DepartmentId!: number;

  DepartmentName!: string;

  employees: EmployeeJava[] | undefined;
}
