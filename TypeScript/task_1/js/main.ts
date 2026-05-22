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

console.log(teacher3);