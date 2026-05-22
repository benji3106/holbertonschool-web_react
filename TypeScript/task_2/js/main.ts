// ==========================================
// TASK 5 : Advanced types Part 1
// ==========================================

// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Fonction createEmployee
const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
};
// ==========================================
// TASK 6 : isDirector & executeWork
// ==========================================

// Type predicate
const isDirector = (employee: Director | Teacher): employee is Director => {
  return employee instanceof Director;
};

// executeWork
const executeWork = (employee: Director | Teacher): string => {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
};

// ==========================================
// TASK 7 : String literal types
// ==========================================

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
};
// ==========================================
// EXECUTIONS / CONSOLE LOGS
// ==========================================
console.log(createEmployee(200));   // Teacher
console.log(createEmployee(1000));  // Director
console.log(createEmployee('$500')); // Director
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
console.log(teachClass('Math'));    // Teaching Math
console.log(teachClass('History')); // Teaching History