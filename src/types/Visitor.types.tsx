export interface Visitor {
  id: number;
  fullName: string;
  email: string;
  department: string;
}

export enum Departments {
  marketing = "Marketing",
  it = "IT",
  sales = "Sales",
  management = "Management",
}
