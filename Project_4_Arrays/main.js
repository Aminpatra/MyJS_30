const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
];

const people = [
  'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 
  'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 
  'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 
  'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 
  'Berio, Luciano', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 
  'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 
  'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 
  'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 
  'Blair, Robert', 'Blair, Tony', 'Blake, William'
];

// people who were born in the 1500s
const fifteen = inventors.filter(op => op.year >= 1500 && op.year < 1600);
console.table(fifteen);

// first & last name of inventors
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames)

// sorting oldest to youngest (DESC)
const ordered = inventors.sort((a, b) => a.year > b.year ? 1: -1);
console.table(ordered);

// how many years did all inventors live ?
const totalYears = inventors.reduce((acc, inventor) => {
  return acc + (inventor.passed - inventor.year)
}, 0)
console.log(totalYears)

// sorting the inventors by years lived
const oldest = inventors.sort((a, b) => {
  const invOne = a.passed - a.year;
  const invTwo = b.passed - b.year;
  return invOne > invTwo ? 1: -1;
})
console.table(oldest)

// sorting people by last name
const sortByLastName = people.sort((a, b) => {
  const [aLast, aFirst] = a.split(", "); 
  const [bLast, bFirst] = b.split(", "); 
  return aLast > bLast ? 1: -1;
})
console.table(sortByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 
  'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce((acc, trans) => {
  if (!acc[trans]) {
    acc[trans]=0;
  }
  acc[trans]++;
  return acc
}, {})

console.log(transportation)

const reduceData = data.reduce((acc, data) => {
  if (!acc.includes(data)) {
    acc.push(data);
  }
  return acc
}, [])

console.log(reduceData)