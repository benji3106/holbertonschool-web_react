
// ==========================================
// TASK 1 : Teacher Interface & Instance
// ==========================================
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Exemple avec l'attribut custom "contract"
const teacher3: Teacher = {
  firstName: 'Sofian',
  fullTimeEmployee: false,
  lastName: 'Messaoui',
  location: 'Toulouse',
  contract: false,
};

// ==========================================
// TASK 2 : Directors Interface (Inheritance)
// ==========================================

interface Directors extends Teacher {
  numberOfReports: number;
}

// Exemple
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// ==========================================
// TASK 3 : printTeacher Function
// ==========================================

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};
// ==========================================
// TASK 4 : StudentClass
// ==========================================

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
const student = new StudentClass('John', 'Doe');
// ==========================================
// EXECUTIONS / CONSOLE LOGS
// ==========================================
console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe"));
console.log(student.displayName());
console.log(student.workOnHomework());
