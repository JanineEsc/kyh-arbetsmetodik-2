import _ from 'lodash' //  importerar lodash

// const numbers = [1, 2, 3, 4, 5] //skapar en array 1-5

// const doubledNumbers = _.map(numbers, num => num*2)  // skapar en array som multiplicerar med 2 
// console.log(doubledNumbers)

const birthYear = [1975, 1997, 2002,1995, 1985];
// const ages =_.map(birthYear, year => 2023 - year)
// console.log(ages)


// const birthYear = [1975, 1997, 2002,1995, 1985];
// const driverLicense = _.map(birthYear, licenseYear => licenseYear + 18 )
// console.log(driverLicense)

const alcoholAge = _.map(birthYear, legal => legal + 21)
console.log(alcoholAge)




