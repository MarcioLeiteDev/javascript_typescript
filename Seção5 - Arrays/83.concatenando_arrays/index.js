const a1 = [1,2,3]
const a2 = [4,5,6]

//const a3 = a1.concat(a2 , [7,8,9] , 'Marcio')

//const a3 = [...a1, 'Marcio' , ...a2 , [7,8,9]]  //spred

const a3 = [...a1, 'Marcio' , ...a2 , ...[7,8,9]]  //spred

console.log(a3)