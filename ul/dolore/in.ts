interface SalaryRecord {
  [key: string]: number;
}

const salary: SalaryRecord = {
  shorif: 50000,
};

function updateSalary(record: SalaryRecord, name: string, amount: number): void {
  if (record.hasOwnProperty(name)) {
    record[name] = amount;
  } else {
    console.error(`No salary record found for ${name}.`);
  }
}

// Usage
updateSalary(salary, 'shorif', 55000);
