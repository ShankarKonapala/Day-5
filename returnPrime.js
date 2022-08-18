

var returnPrime = function() {
  let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
  for(j=0;j<a.length;j++){
    if (a[j] <= 1) {
      a.splice(j,1);
    } 
    else {
        for (let i = 2; i < a[j]; i++) {
          if (a[j] % i == 0) {
            a.splice(j,1);
          }
        }
    }
  }
  console.log(a)
}
returnPrime()