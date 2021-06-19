// xndir 1
// Given an array of numbers. Write a function to separate odd and even numbers in different arrays. 

function digithOddOfEven (number) { 
    let odd =[]
    let even = []
    for(let i =0; i < number.length; i++) {
        if(number[i]%2 ===0) {
          even.push(number[i])
        } if(number[i]%2 === 1){
                     odd.push(number[i])
            }
    }
            console.log(odd)
            console.log(even)
           
}

// xndir 4
// Given an array of numbers. Create an array containing only unique elements.

function uniqueElements (array) {
  let res = []
  for (x of array) {
     let contains = false
    for (y of res) {
        if (y == x) {
            contains = true
            break;
        } 
    }
    if (!contains){
     res.push(x)
    } 
  }
  return res;
 }
 
 // xndir 5 , 3
 // .Given a string and symbols. Change first symbol by the second one in the string. 
 //Write a function which receives two strings and removes appearances of the second string from the first one. 

 function third(s1, s2,replc) { 
  let result = []
  let cursor = 0
  while (cursor < s1.length){
      contains = true
      for (let i = 0; i < s2.length; i++) {
          const element = s1[cursor];
          if (s2[i] != element) {
              contains = false
              result.push(element)
              cursor += 1;
              break;
          }
          else{
              cursor += 1;
          }   
      }   
      if (contains) {
          result.push(replc)
      }
  }
  return result.join("")
}

third('This is some text.', 'is',"")
third("The results are not recorded yet","t","w")
