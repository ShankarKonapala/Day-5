  
  

let printOdd = () => {
  let a = [7,6,3,9,5,1,4,6,1,8,6,2]
  for(let i=0 ; i<a.length ; i++){
    if(a[i]==1)
      continue
    if(a[i]%2!=0)
      console.log(a[i])
  }
}
printOdd()