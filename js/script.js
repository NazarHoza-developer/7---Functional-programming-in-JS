const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1 Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує 
// скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись 
// через call та працювати з даними через this
function getMyTaxes(salary) {
    return salary * this.tax;
}
console.log(getMyTaxes.call(ukraine, 2000));

// 2 Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує
//  скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary).
//   Функція повинна викликатись через call та працювати з даними через this
function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}
console.log(getMiddleTaxes.call(latvia));

// 3 Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує,
//  скільки всього податків платять IT-спеціалісти у кожній країні
//  . (tax * middleSalary * vacancies). Функція повинна викликатись через call та
//   працювати з даними через this
function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
} 
console.log(getTotalTaxes.call(litva));
// 4 Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт 
// виду: { salary: number, taxes: number, profit: number } кожні 10 
// секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000.
//  taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;
// для виводу в консоль кожні 10 секунд використайте setInterval
function getMySalary(country) {
    const min = 1000;
    const max = 2000;
    const  salary = Math.round(Math.random() * (max - min) + min);
const profit = {
    salary: salary,
    taxes: this.tax,
    profit: salary - this.tax
}
    console.log(profit)
}
setInterval(()  => getMySalary.call(ukraine), 6000);