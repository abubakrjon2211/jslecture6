// let arr = [1, 2, 3, 4, "hello", [1, 2, 3, [4], 5]];
// console.log(arr[5][3][0]);
// arr[6] = "good";
// console.log(arr[6]);











// let arr = [1, 2, 3, 4, 5, 6, 7];


// console.log(arr.pop());
// console.log(arr);


// console.log(arr.push(9));
// console.log(arr);


// console.log(arr.shift());
// console.log(arr);


// console.log(arr.unshift(0));
// console.log(arr);


// console.log(arr.splice(0, 2, 11, 12));
// console.log(arr);


// console.log(arr.reverse());
// console.log(arr);




// 1

// function bot(a) {
//     let k = 0;
//     for (let i = 0; i < a.length; i++){
//         k += a[i];
//     }
//     return k;
// }
// console.log(bot([1,2,3,4]));





// 2

// function bot(a) {
//     let k = -999999;
//     for (let i = 0; i < a.length; i++){
//         if (a[i] > k) {
//             k = a[i];
//         }
//     }
//     return k;
// }
// console.log(bot([1,2,3,4,5,6,7,8,4,9,5,6]));






// 3

// function bot(a) {
//     let k = 0;
//     for (let i = 0; i < a.length; i++){
//         if (a[i] % 2 == 0) {
//             k++;
//         }
//     }
//     return k;
// }
// console.log(bot([1,2,3,4,5,6]));






// 4

// function bot(a,b) {
//     return a.includes(b);
// }
// console.log(bot([1,2,3,4,5],6));







// 5

function bot(a) {
    let k = 0;
    for (let i = 0; i < a.length; i++){
        k += a[i];
    }
    return k / a.length;
}
console.log(bot([2,4,6,8]));













