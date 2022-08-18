

var sumOfArray = function(){
    let a = [1,2,3,4,5,6,7,8,9,10]
    let b = 0;
    for(let i=0 ; i<a.length ; i++){
        b += parseInt(a[i]);
    }
    console.log(b)
  
}
sumOfArray()