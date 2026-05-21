interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Aïny",
  lastName: "Ourzik",
  age: 35,
  location: "Toulouse"
};

const student2: Student = {
  firstName: "Laura",
  lastName: "Aupetit",
  age: 25,
  location: "Toulouse"
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
