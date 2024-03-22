// Write your solution here!
const cats =  ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(push){
     cats.push("Ralph")
     return cats

}

function destructivelyPrependCat(unshift){
     cats.unshift("Bob")
     return cats

}

function destructivelyRemoveLastCat(pop){
     cats.pop()
     return cats

}

function destructivelyRemoveFirstCat(shift){
     cats.shift()
     return cats


}

function appendCat(spreadOperator){
     const newspreadOperator = [ ...cats , "Broom"]
      
     return newspreadOperator


}

function prependCat (){
      const otherSpreadOperator = ["Arnold" , ...cats ]

            return otherSpreadOperator

}

function removeLastCat(){
      const slice = cats.slice( 0, cats.length-1)
      return slice

}

function removeFirstCat (){
        const otherSlice = cats.slice (1)
        return otherSlice


}