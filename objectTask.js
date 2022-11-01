    
// // let object = {
// //     "results" : [
// //       {
// //         "gender": "a",
// //         "name": {
// //           "title": "Mr",
// //           "first": "a",
// //           "last": "b"
// //         },
// //         "location": {
// //           "street": {
// //             "number": 25
// //           }
// //         }
// //       },
// //       {
// //         "gender": "b",
// //         "name": {
// //           "title": "Mr",
// //           "first": "c",
// //           "last": "d"
// //         },
// //         "location": {
// //           "street": {
// //             "number": 30
// //           }
// //         }
// //       },
// //       {
// //         "gender": "c",
// //         "name": {
// //           "title": "Mr",
// //           "first": "d",
// //           "last": "e"
// //         },
// //         "location": {
// //           "street": {
// //             "number": 45
// //           }
// //         }
// //       }
// //     ]
// //   }
// //   const fullNameA = object.results[0].name.title + " " + object.results[0].name.first + " " + object.results[0].name.last
// //   const locationA = object.results[0].location.street.number

// //   const fullNameB = object.results[1].name.title + " " + object.results[1].name.first + " " + object.results[1].name.last
// //   const locationB = object.results[1].location.street.number

// //   const fullNameC = object.results[2].name.title + " " + object.results[2].name.first + " " + object.results[2].name.last
// //   const locationC = object.results[2].location.street.number

// //   console.log(`${fullNameA} lives at ${locationA}, ${fullNameB} lives at ${locationB}, and ${fullNameC} lives at ${locationC}`)


// //   const find = () => {
// //     for (let i = 0; i < object.results.length; i++) {
// //         console.log(`${object.results[i].name.title} ${object.results[i].name.first} ${object.results[i].name.last}`)
// //       }
// // }

// // find()




// const object2 = {
//   "results" : [
//     {
//       "gender": "a",
//       "name": {
//         "title": "Mr",
//         "first": "a",
//         "last": "b"
//       },
//       "location": {
//         "street": {
//           "number": 25
//         }
//       }
//     },
//     {
//       "gender": "b",
//       "name": {
//         "title": "Mr",
//         "first": "c",
//         "last": "d"
//       },
//       "location": {
//         "street": {
//           "number": 30
//         }
//       }
//     },
//     {
//       "gender": "b",
//       "name": {
//         "title": "Mr",
//         "first": "d",
//         "last": "e"
//       },
//       "location": {
//         "street": {
//           "number": 45
//         }
//       }
//     },
//     {
//       "gender": "d",
//       "name": {
//         "title": "Mr",
//         "first": "d",
//         "last": "e"
//       },
//       "location": {
//         "street": {
//           "number": 45
//         }
//       }
//     },
//   ]
// }

// const genderArr = object2.results.map((element) => element.gender);

// console.log(genderArr)
// // a, b, b, d
// const uniqueGenders = genderArr.filter((element, index) => {
//   console.log(genderArr.indexOf(element))
//   console.log(index)
//   return genderArr.indexOf(element) === index;
// });

// console.log(uniqueGenders)
// // a, b, d


const website = [
  { familyId: 'a', sku: '' },
  { familyId: 'b', sku: '' }, 
  { sku: 'aa', familyId: '' }, 
  { sku: 'bb', familyId: '' }
]

const familyIdsOnly = website.map((element) => element.familyId);
const skusOnly = website.map((element) => element.sku);

const filteredSKU = skusOnly.filter( element => {
  return element.length > 0
});
const filteredFamilyID = familyIdsOnly.filter(element => {
  return element.length > 0
});

let data = {
  familyIds: filteredFamilyID,
  SKUS: filteredSKU
}
console.log(data);

console.log(filteredFamilyID)
console.log(filteredSKU)




let data2 = [];

const array1 = [1, 2, 3, 4];
// const array2 = [e, f, g, h]
const array3 = array1.reduce((acc, item) => {
  console.log(`item ${item}`)
  console.log("Acc", acc);
  return item + acc;
}, 0);

console.log(array3);











// {
//   familyIds: ['a', 'b'],
//   skus: ['aa', 'bb']
// }
