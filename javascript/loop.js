// i = 0
// j = 1
// for (let i = 0; i < 7; i++) {

//   let row = "";
//   for (let j = 0; j < 7; j++) {
//     row += `(${i},${j}) `
//   }
//   console.log(row);

// }

for (let i = 0; i < 7; i++) {

  let row = "";
  for (let j = 0; j < 7; j++) {
    if (i == 0 || i == 3 || j == 0 || j == 6 && i < 4) {
      row += `* `
    } else {
      row += `  `
    }
  }
  console.log(row);

}


// if (c1 || c2 || c3) {
//   console.log("okay");
  
// }