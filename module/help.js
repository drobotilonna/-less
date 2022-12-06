const help = {
    getValue: function (array,ind){
        let res = []
       for (let i = 0; i < array.length; i++){
            res.push(array[i][ind])
         }
         return res
      },

      getValue1: function (array,ind){
        let res = []
       for (let i = 0; i < array.length; i++){
            res.push(array[i][ind])
         }
         return res
      }
        
}

export const getValue = help.getValue
export const getValue1 = help.getValue1
