// function shellSort(arr) {
//   let n = arr.length;
//   //   let nO2 = Math.floor(n / 2);

//   //   console.log(arr[0]);
//   //   console.log(arr[nO2]);
//   for (let i = 2; i <= n; i *= 2) {
//     for (let j = 0; j <= Math.floor(n / 2); j++) {
//       let curr = arr[j];
//       console.log(curr);
//       let comp = arr[j + Math.floor(n / i)];
//       console.log(comp);
//       if (curr > comp) {
//         arr[j] = comp;
//         arr[j + Math.floor(n / i)] = curr;
//       }
//     }
//     console.log(arr);
//   }
//   console.log(arr);

//   //   console.log(n);
//   //   console.log(nO2);
// }

function shellSort(arr) {
  let n = arr.length;
  //   let interval = Math.floor(Math.sqrt(n));
  //   console.log(interval);
  //   let nO2 = Math.floor(n / 2);

  //   console.log(arr[0]);
  //   console.log(arr[nO2]);

  for (let j = 0; j < Math.floor(n / 2); j++) {
    let interval = [];
    for (let i = j; i < n; i += 4) {
      interval.push(arr[i]);
    }
    console.log(interval);
    // let curr = arr[j];
    // console.log(curr);
    // let comp = arr[j + 4];
    // let comp2 = arr[j+8]
    // console.log(comp);
    // if (curr > comp) {
    //   arr[j] = comp;
    //   arr[j + Math.floor(n / 2)] = curr;
    // }
  }
  //   console.log(arr);

  //   console.log(n);
  //   console.log(nO2);
}

let ssArr = [9, 8, 3, 7, 5, 6, 4, 1];
let ssArr2 = [9, 4, 7, 2, 1, 5, 3, 8, 6];
let ssArr3 = [25, 24, 21, 20, 19, 15, 12, 10, 9, 7];
