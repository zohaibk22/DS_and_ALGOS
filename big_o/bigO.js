//Log all pairs of Array
const boxes = [1,2,3,4,5];
let testArray = []

boxes.forEach((num)=>{
    boxes.forEach((num2)=>{
        let newArr = []
        newArr.push(num, num2)
        testArray.push(newArr)
    })
})

console.log(testArray)