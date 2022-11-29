const people =[
    { id:1, name:"hifts", age: 23},
    {id: 2,name:"kola", age:45}

]

// let res= []

// people.forEach(function (el){
//      res.push(el.name)
    
// })


function getValue(array,key){
  let res = []
  array.forEach(function (el){
         res.push(el.key)
        
  })
  return res;     
}


console.log(getValue(people,"name"))