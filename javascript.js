

// function arrangeStuff(arr){

//     let finalArray = [];
//     let finalArrayChild = [];
//     let previousElement = [];

//     for(let i = 0; i < arr.length; i++){
//         // debugger;
//         let isViableNum = function(){
//             for(let g = 0; g < previousElement.length; g++){
//                 if(arr[i] === previousElement[g]){
//                     return false;
//                 }
//             }
//             previousElement.push(arr[i]);
//             return true;
//         }
//         if(isViableNum()){
//             for(let b = 0; b < arr.length; b++){
//                 if(arr[i] === arr[b]){
//                     finalArrayChild.push(arr[b]);
//                 }
//             }
//             finalArray.push(finalArrayChild);
//             finalArrayChild = [];
//         }      
//     }
//     return finalArray.sort();
// }

// b = arrangeStuff([9,1,2,3,60,0,0,0,1,3,4]);

// console.log(b);

