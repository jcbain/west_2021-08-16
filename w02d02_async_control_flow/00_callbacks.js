// higher order function => takes a function (callback) as a parameter
// callback => the function passed to the HOF

const chickens = [
  {lang: 'spanish', chicken: 'pollo'},
  {lang: 'english', chicken: 'chicken'},
  {lang: 'french', chicken: 'poulet'},
  {lang: 'polish', chicken: 'kurczak'}
]

// chickens.forEach((element) => console.log(element.chicken))

const myForEach = (arr, callback) => {
  for(const index in arr) {
    const element = arr[index];
    callback(element, index)
  }
}

const sayChicken = (element, i) => {
  console.log(`my element is ${element} and my index of that element is ${i}`)
}

// sayChicken('james', 1)
// myForEach(chickens, (element, i) => {
//   console.log(`in ${element.lang} chicken is "${element.chicken}"`)
// })
myForEach(chickens, sayChicken)

