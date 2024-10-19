class Employee {
    name: string;
    salary: number;
    position: string;
    department: string;
    email: string;
    age: number;

    constructor(name: string, salary: number, position: string, department: string,email: string  = "n/a", age: number = -1 ) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email;
        this.age = age;
    }

    }
    class Department {
        name: string;
        employees: Employee[] = [];

        constructor(name: string) {
            this.name =name;
        }

        addEmployee(employee: Employee): void {
            this.employees.push(employee);
        }

        getAverageSalry(): number {
            const totalSalary = this.employees.reduce ((sum, emp) => sum + emp.salary, 0);
            return totalSalary / this.employees.length;
        }

    }
    function findDepartmentWithHighestAverageSalary(employees: Employee[]): void {
        const departments: { [key: string]: Department } = {};
        for (const employee of employees) {
            if (!departments[employee.department]) {
                departments[employee.department] = new Department(employee.department);
            }
            departments[employee.department].addEmployee(employee);
        }
        let highestAvgSalary = 0 
        let bestDepartment: Department | null = null;
        for (const deptName in departments) {
            const department = departments[deptName];
            const averageSalary = department.getAverageSalry();
            if (averageSalary > highestAvgSalary) {
                highestAvgSalary= averageSalary;
                bestDepartment = department;
            }
        }
        if (bestDepartment) {
            console.log(`Highest Average Salary: ${bestDepartment.name}`);
            const sortedEmployees = bestDepartment.employees.sort((a,b) => b.salary - a.salary);
            for (const emp of sortedEmployees) {
                console.log(`${emp.name} ${emp.salary.toFixed(2)} ${emp.email} ${emp.age}`);
            }
        }
    }
const inputlines = [

];

for (let i = 1; i <= numberOfEmployees; i++) {
    const parts = inputlines[i].split
}
})