
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if(!matrix){
    return []
  }else if(matrix.length > 0){
    let arr = []
    for (let i = 0; i < matrix.length; i++) {
      if ((matrix.indexOf(matrix[i]) + 1) % 2 === 0) {
        arr.push(matrix[i].reverse())
      }else if((matrix.indexOf(matrix[i]) + 1) % 2 !== 0){
        arr.push(matrix[i])
      }
    }
    return arr.flat()
  }
    return []
}
