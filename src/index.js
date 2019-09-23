import "./styles.css";

const bubbleSort = arr => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

const selectionSort = arr =>{

  for (let i = 0; i < arr.length; i++) {

      let min = i; 
      
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[min] > arr[ j ]) {
              min = j;
          }
      }

      if (i !== min) {
          let temp = arr[ i ];
          arr[ i ] = arr[min];
          arr[min] = temp;
      }
  }
  return arr
}


// const merger = (left, right) => {
//   const arr = [];
//   while(left.length && right.length) {
//       if (left[0] < right[0]) {
//           arr.push( left.shift() )
//       } else {
//           arr.push( right.shift() )
//       }
//   }
//   return [ ...arr, ...left, ...right ];
// }

const ArrayList = [9, 0, 5, 7, 1, 3, 7];
const sort1 = bubbleSort(ArrayList);
const sort2 = selectionSort(ArrayList);
// const sort3 = merger(ArrayList);

console.log(sort1);
console.log(sort2);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  This is my home test with vanilla js
</div>
`;
