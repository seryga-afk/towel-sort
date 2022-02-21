
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if(!matrix){
    return []
  }else if(matrix.length > 0){
    let arr = []
    for (let i = 0; i < matrix.length; i++) {
      if ((matrix.indexOf(matrix[i]) + 1) % 2 === 0) {
        arr += "," + (matrix[i].reverse())
      }else if((matrix.indexOf(matrix[i]) + 1) % 2 !== 0){
        arr +=  "," + (matrix[i])
      }
    }
    let arr1 = []
    arr = arr.split(",")
    arr.shift()

    for (let i = 0; i < arr.length; i++) {
        arr1.push(+arr[i])
    }
    return arr1
  }
    return []
}
